----------Proje Hakkında----------
Bu proje Next.js ile oluşturulmuştur. Next.js bir react frameworküdür. Next.js ile oluşturulan projelerde SSR(Server Side Rendering) ve SSG(Static Site Generation) gibi özellikler kullanılabilir ancak bu projede onları kullanmadım sadece component yapısını ve bazı hookları kullanarak bir proje oluşturdum. Bunların yanı sıra css library'si olarak Tailwind ve UI framework olarak Material UI kullandım bunlara ek olarak Next.js in özelliği olan static routing, Next/Image ve Next/Link kullandım.

----------Kullanılan Teknolojiler----------

- Next.js
- React
- Tailwind
- Material UI

----------Material UI----------
Material UI'ı bazı iconlar ve search bar componenti için kullandım.
Örneğin InputWithIcon componentinde Search iconunu kullanarak bir search bar oluşturulmuştur.

----------Tailwind----------
Tailwind'i css library olarak kullandım. CSS yazımını kolaylaştırmak, daha az kodla daha fazla iş yapmak, diğer developerlar tarafından daha kolay anlaşılması için kullandım.

----------Next/Image----------
Next/Image Next.js in özelliği olan bir component. Bu component ile resimlerin optimize edilmesi sağlanır. Resimlerin optimize edilmesi sayfa yüklenmesini hızlandırır ve kullanıcıya daha iyi bir deneyim sunar.

----------Next/Link----------
Next/Link Next.js in özelliği olan bir component. Bu component yine bir Next.js özelliği olan static routing ile sayfalar arası geçişlerde sayfa yenilenmesi olmamasını sağlar. Sayfa yenilenmesi olmaması sayfa yüklenmesini hızlandırır ve kullanıcıya daha iyi bir deneyim sunar.

----------useRouter----------
useRouter hooku ile [blog_id].js dosyasında her bir blog componente prop göndermek yerine useRouter hookuyla urlden blog_id değerini okudum ve bu değere uygun blogun sayfasını render ettim.

----------Projenin Özellikleri----------
İlk açılıştaki sayfada constants klasöründe bulunan blogs.js dosyasındaki blogların listesi görüntülenir. Her bir blogun başlığı, kısa açıklaması ve resmi görüntülenir. Her bir blogun başlığına tıklandığında blogun detay sayfasına yönlendirilir. Blog detay sayfasında blogun başlığı, açıklaması, resmi ve tarih bilgisi görüntülenir. Ayrıca authors.js dosyasında tuttuğum yazarlar ile blogs.js dosyasında autor_id ile bir bağlantı kurdum ve yazar bilgilerini ordan çekerek ekranda gösterdim.

Projedeki bütün resimler public klasörü altında bulunmaktadır bu resimlere hangi pathte olursak olalım direkt olarak erişebilmeyi sağlıyor. Örneğin public/images/1.jpg dosyasına erişmek için /images/1.jpg şeklinde erişebiliyoruz.

Projedeki yazıları ve yazarları medium.com sitesinden çektim. Zaten sitenin görünüşünden de anlaşılacağı gibi medium.com sitesinin tasarımını ona benzetmeye çalıştım. Projede kullanılan resimlerin hepsi medium.com sitesinden çekilmiştir.

Blog detay sayfasını blogs.js dosyasında kurduğum veri yapısı sayesinde paragraf ardından ilgili fotoğraf ve ardından tekrar paragraf şeklinde oluşturdum. Bu sayede blog detay sayfasında yazıyı daha okunaklı hale getirdim.

Tabiki projede şu anda Navbar sadece ana sayfaya yönlendirmek için kullandım ancak ilerde eklediğim iconlara uygun fonksiyonlar eklenebilecek kadar genişletilebilir bir yapıda oluşturdum.

bu arda logoyu kendim figma üzerinden tasaradım. :)

----------Web Sitesine Erişim----------

----------Çalıştırmak için----------
Önce gerekli modülleri yüklemek için

```bash
npm install
veya
yarn install
veya
pnpm install
```

Sonra projeyi development modda çalıştırmak için

```bash
npm run dev
veya
yarn dev
veya
pnpm dev
```

Veya projeyi production modda çalıştırmak için

```bash
npm run build
npm run start
veya
yarn build
yarn start
veya
pnpm build
pnpm start
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
