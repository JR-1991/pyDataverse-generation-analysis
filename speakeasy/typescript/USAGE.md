<!-- Start SDK Example Usage [usage] -->
```typescript
import { PyDataverse } from "openapi";

async function run() {
    const sdk = new PyDataverse({
        apiKeyAuth: "<YOUR_API_KEY_HERE>",
    });

    const persistentId = "string";
    const exporter = "string";

    const result = await sdk.native.exportDataset(persistentId, exporter);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->