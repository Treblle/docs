---
title: Treblle for .Net Core
description: Integrating Treblle in .Net Core
layout: ../../../layouts/MainLayout.astro
---

## Requirements

* .NET Core 3.0

## Installation

You can install Treblle .NET Core via NuGet Package Manager or by running the following command:

```bash
dotnet add package Treblle.Net.Core
```

You will be prompted to enter your Treblle API key and Project ID. Your settings will be saved in ```app.config``` and you can always edit them there.

Here is an example:

```xml

<configuration>
	<appSettings>
		<add  key="TreblleApiKey"  value="{Your_API_Key}"  />
		<add  key="TreblleProjectId"  value="{Your_Project_Id}"  />
	</appSettings>
</configuration>

```

Next you'll need to add this to your ``` Configure(IApplicationBuilder app, IWebHostEnvironment env) ``` method in ```Startup.cs```:


```csharp
app.Use(next => new  RequestDelegate(
	async  context =>
	{
		context.Request.EnableBuffering();
		await  next(context);
	}
));
```

Now you can specify which endpoints you want Treblle to track by adding this simple attribute to any API controller or method:

```csharp

[Treblle]

```


That's it. Your API requests and responses are now being sent to your Treblle project. Just by adding a few lines of code you get features like: auto-documentation, real-time request/response monitoring, error tracking and so much more.


### Need to hide additional fields?

If you want to expand the list of fields you want to hide, you can pass property names you want to hide by adding the ```AdditionalFieldsToMask``` property to your ```app.config``` file like in the example below.


```xml
<configuration>
	<appSettings>
		<add  key="TreblleApiKey"  value="{Your_API_Key}"  />
		<add  key="TreblleProjectId"  value="{Your_Project_Id}"  />
		<add  key="AdditionalFieldsToMask"  value="secretField,highlySensitiveField"  />
	</appSettings>
</configuration>
```

## Error handling

If there are any errors, they will be logged in ```TreblleLog.txt```.


## Support

If you have problems of any kind feel free to reach out via <https://treblle.com> or email vedran@treblle.com and we'll do our best to help you out.
