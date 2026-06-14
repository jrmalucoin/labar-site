export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://labarinformatica.com.br",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},
];
}' > app/sitemap.ts


export default function robots(): MetadataRoute.Robots {
return {
rules: {
userAgent: "*",
allow: "/",
},
sitemap: "https://labarinformatica.com.br/sitemap.xml",
};
}