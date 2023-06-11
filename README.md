## Gereksinimler

```
- Node.js
- NPM
```

## Proje Hakkında

```
Bu proje Next.js ile oluşturulmuştur. Next.js bir react frameworküdür.
Next.js ile oluşturulan projelerde SSR(Server Side Rendering) ve SSG(Static Site Generation)
gibi özellikler kullanılabilir ancak bu projede onları kullanmadım sadece component yapısını ve
bazı hookları kullanarak bir proje oluşturdum. Bunların yanı sıra css library'si olarak Tailwind ve
UI framework olarak Material UI kullandım bunlara ek olarak Next.js in özelliği olan
static routing, Next/Image ve Next/Link kullandım.

Projede .NET Core Web API kullanarak bir backend oluşturdum. Database olarak ise Postgresql kullandım.
Bu database bir sunucuda çalıştığı için projeyi çalıştırmadan önce .NET Core Web API'yi çalıştırmanız
yeterli olacaktır. Projede görünen bloglar ve yazarlar bu databse üzerinden çekilmektedir ve yaptığınız
değişikliklerde database'i etkileyecektir.
```

## Kullanılan Teknolojiler

```
- Next.js
- React
- Tailwind
- Material UI
```

## Harici Teknolojiler

```
- C# .NET Core Web API version 7.0.5
- Entity Framework Core version 7.0.5
- PostgreSQL
```

## Material UI

```
Material UI'ı bazı iconlar ve search bar componenti için kullandım.
Örneğin InputWithIcon componentinde Search iconunu kullanarak bir search bar oluşturulmuştur.
```

## Tailwind

```
Tailwind'i css library olarak kullandım. CSS yazımını kolaylaştırmak,
daha az kodla daha fazla iş yapmak, diğer developerlar tarafından daha kolay anlaşılması için kullandım.
```

## Next/Image

```
Next/Image Next.js in özelliği olan bir component. Bu component ile resimlerin optimize edilmesi sağlanır.
Resimlerin optimize edilmesi sayfa yüklenmesini hızlandırır ve kullanıcıya daha iyi bir deneyim sunar.
```

## Next/Link

```
Next/Link Next.js in özelliği olan bir component. Bu component yine bir Next.js özelliği olan
static routing ile sayfalar arası geçişlerde sayfa yenilenmesi olmamasını sağlar.
Sayfa yenilenmesi olmaması sayfa yüklenmesini hızlandırır ve kullanıcıya daha iyi bir deneyim sunar.
```

## useRouter

```
useRouter hooku ile [blog_id].js dosyasında her bir blog objecti için componente prop göndermek
yerine useRouter hookuyla urlden blog_id değerini okudum ve bu değere uygun blogun sayfasını render ettim.
```

## Projenin Özellikleri

```
İlk açılıştaki sayfada db üerinden blogların listesi görüntülenir.
Her bir blogun başlığı, kısa açıklaması ve resmi görüntülenir. Her bir blogun başlığına tıklandığında
blogun detay sayfasına yönlendirilir. Blog detay sayfasında blogun başlığı, açıklaması, resmi ve
tarih bilgisi görüntülenir. Ayrıca authors.js dosyasında tuttuğum yazarlar ile bloglar arasında bir bağlantı kurdum
ve yazar bilgilerini ordan çekerek ekranda gösterdim.

Projedeki yazar resimlerı public klasörü altında bulunmaktadır bu resimlere hangi pathte olursak olalım
direkt olarak erişebilmeyi sağlıyor. Örneğin public/images/1.jpg dosyasına erişmek için/images/1.jpg
şeklinde erişebiliyoruz. Blogların resimlerini ise databasede tuttuğum için bu resimlere direkt olarak ordan eriştim.

Projedeki yazıları ve yazarları medium.com sitesinden çektim. Zaten sitenin görünüşünden de anlaşılacağı
gibi medium.com sitesinin tasarımına benzetmeye çalıştım. Projede kullanılan resimlerin hepsi
medium.com sitesinden çekilmiştir.

Blog detay sayfasını blog tablasında kurduğum veri yapısı sayesinde paragraf ardından ilgili fotoğraf
ve ardından tekrar paragraf şeklinde oluşturdum. Bu sayede blog detay sayfasında yazıyı daha okunaklı
hale getirdim.

İlk başlangıçta hiçbir kullanıcı girişi olmadığı için kullanıcı girişi yapmak için sign in butonu gözüküyor.
Sign in olmasak bile blogları görüntüleyebiliyoruz. Sign in olursak kendi yazdığımız blogları silebiliyoruz
denemek için username: emre password: pass ile deneyebilirsiniz.

Write butonuna tıkladığımızda bir popup açılıyor ve orda kişileştirilmiş blog yazabiliriz.
Sadece title doldurulması zorunlu diğer her şey isteğe bağlı o yüzden blogun
görünümünü istediğimiz gibi düzenleyebiliriz örneğin resimi önce yazıyı sonra koymak istiyorsak
ikinci paragraf kısmı tam tersi için birinci paragraf kısmı doldurulacak.

Kendi yazdığımız blogları görmek için sign in olduktan sonra sağ üstte profil resmine tıklayıp açılan
kısımdan profile butonuna tıklıyoruz ve orda kendi yazdığımız blogları görüntüleyebiliyoruz.
Bu ekranda kendi yazdığımız blogları silebiliyoruz.
```

bu arda logoyu kendim figma üzerinden tasaradım. :)

````

## Web Sitesine Erişim

GitHub: https://github.com/EmreErgeldi/web-project

Vercel: https://web-project-pied.vercel.app/

## Çalıştırmak için

Önce gerekli modülleri yüklemek için

```bash
npm install
# veya
yarn install
# veya
pnpm install
````

Sonra projeyi development modda çalıştırmak için

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Veya projeyi production modda çalıştırmak için

```bash
npm run build
npm run start
# veya
yarn build
yarn start
# veya
pnpm build
pnpm start
```
