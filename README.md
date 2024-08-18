#  Description:
Basic site plotting COVID-19 cases on world map using JavaScript & 'Maptiler SDK'

Light & Dark mode (Uses system setting by default)

data.json file is located inside data folder

#  How to use:
In order to make it work add your Maptiler API key in index.js file located in js folder
<br><br>
Then open terminal inside project's directory and run:
```shell
npm install
```

#  Setting up Maptiler:
Official Docs:
<br>
https://docs.maptiler.com/sdk-js/examples/how-to-use
<br><br>
https://www.npmjs.com/package/@maptiler/sdk

1. Install the package
```shell
npm i @maptiler/sdk
```

2. Add stylesheets
```shell
<link href="https://cdn.maptiler.com/maptiler-sdk-js/v2.0.3/maptiler-sdk.css" rel="stylesheet" />
<link rel="stylesheet" href="/css/style.css">
```

3. Edit style.css, add
```shell
body {margin: 0; padding: 0;}
#map {position: absolute; top: 0; bottom: 0; width: 100%;}
```

4. Add scripts, add maptiler api key
```shell
<script src="https://cdn.maptiler.com/maptiler-sdk-js/v2.0.3/maptiler-sdk.umd.js"></script>
<script> maptilersdk.config.apiKey = "your-maptiler-api-key"; const map = new maptilersdk.Map({container: "map", style: maptilersdk.MapStyle.STREETS,}); </script>
```

<h2>To contribute:</h2>
<p>Fork this repo and send a pull request to the 'requests' branch.</p>
