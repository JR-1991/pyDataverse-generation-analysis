<!-- Start SDK Example Usage [usage] -->
```python
import pydataverse
from pydataverse.models import operations

s = pydataverse.PyDataverse(
    api_key_auth="<YOUR_API_KEY_HERE>",
)


res = s.native.export_dataset(persistent_id='string', exporter='string')

if res.status_code == 200:
    # handle response
    pass
```
<!-- End SDK Example Usage [usage] -->