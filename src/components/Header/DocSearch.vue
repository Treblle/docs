<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys, useDebounceFn } from '@vueuse/core'
import { ALGOLIA } from '../../config'
import algoliasearch from 'algoliasearch'

const client = algoliasearch(ALGOLIA.appId, ALGOLIA.apiKey)
const index = client.initIndex(ALGOLIA.indexName)

const keys = useMagicKeys()
const cmdK = keys['Meta+K']
const escapeKey = keys['escape']
const isOpen = ref(false)
const query = ref('')
const searchResults = ref([])

watch(cmdK, (v) => {
  if (v) toggleSearchModal()
})

watch(escapeKey, (v) => {
  if (v) closeSearchModal()
})

const debouncedFn = useDebounceFn(async () => {
  if (!query.value) {
    searchResults.value = []
    return
  }
  index.search(query.value).then(({ hits }) => {
    searchResults.value = hits
  })
}, 500)

watch(query, (v) => {
  if (v) debouncedFn()
})

const openSearchModal = () => {
  isOpen.value = true
}
const closeSearchModal = () => {
  searchResults.value = null
  query.value = ''
  isOpen.value = false
}
const toggleSearchModal = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <button
    @click="openSearchModal"
    class="search-button open-search relative flex w-full space-x-2 rounded-sm shadow-sm shadow-black/25 sm:space-x-4 sm:px-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search h-4 w-4"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
    <span> Search docs.. </span>
  </button>
  <Teleport to="body">
    <Transition name="modal">
      <section
        v-if="isOpen"
        class="modal-mask fixed inset-0 z-50 flex min-h-screen w-screen items-start justify-center"
      >
        <div
          class="search-modal mt-28 w-full self-start rounded-sm px-6 py-8 sm:w-5/6 lg:w-2/5"
        >
          <div class="relative flex">
            <div class="flex items-start">
              <h3 class="flex space-x-2 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search h-8 w-8 text-treblle-blue"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
                <span>Search docs</span>
              </h3>
              <button
                class="absolute -right-2 -top-6 text-lg"
                @click="closeSearchModal"
              >
                &#x2717;
              </button>
            </div>
          </div>
          <div>
            <input
              placeholder="Start typing..."
              v-model="query"
              autofocus="true"
              class="search-box w-full rounded-sm border bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
            />

            <ul class="max-h-96 overflow-auto rounded-b-sm">
              <li v-for="result in searchResults" class="px-4 py-2">
                <a
                  :href="result.url"
                  class="hover:no-underline focus:no-underline"
                >
                  <p class="font-bold">{{ result.title }}</p>
                  <p class="truncate">
                    {{ result.description }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Transition>
  </Teleport>
</template>
<style scoped>
.modal-mask {
  background-color: var(--modal-mask-bg);
  width: 100%;
  height: 100%;
}
li:hover {
  background-color: var(--docsearch-hit-hover-background);
}

li {
  background-color: var(--docsearch-hit-background);
  color: var(--docsearch-hit-color);
}

.search-modal {
  color: var(--docsearch-text-color);
  background-color: var(--theme-bg);
  box-shadow: 0px 0px 9px -3px hsla(var(--color-gray-5), 0.5);
  border-color: var(--theme-bg);
}
.open-search {
  color: var(--theme-code-inline-text);
  background-color: var(--theme-code-inline-bg);
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
.search-box {
  border-color: var(--theme-divider);
}
</style>
