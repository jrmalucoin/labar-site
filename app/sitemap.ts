import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://labarinformatica.com.br",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},
];
}

app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
return {
rules: {
userAgent: "*",
allow: "/",
},

```
sitemap:
  "https://labarinformatica.com.br/sitemap.xml",
```

};
}
