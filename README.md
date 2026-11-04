# Yaprak Dökümü TV

Siyah-altın temalı Next.js başlangıç projesi. Ana sayfa prototipi, demo sohbet arayüzü ve Supabase için başlangıç SQL şeması içerir.

## Yerel çalıştırma
1. Node.js 20 veya üzerini kurun.
2. `npm install`
3. `npm run dev`
4. Tarayıcıda http://localhost:3000 adresini açın.

## Ücretsiz yayınlama
1. Projeyi GitHub'a yükleyin.
2. Vercel hesabı açıp GitHub deposunu içe aktarın.
3. Vercel size ücretsiz bir `*.vercel.app` alt alan adı verir (müsaitlik ve platform koşullarına bağlıdır).

## Supabase bağlantısı
1. Supabase projesi oluşturun.
2. SQL Editor içinde `supabase/schema.sql` dosyasını çalıştırın.
3. Project URL ve anon key değerlerini `.env.local` dosyasına ekleyin (`.env.example` dosyasını kopyalayın).

## Önemli: Henüz tamamlanmamış entegrasyonlar
- Demo giriş düğmesi gerçek kimlik doğrulaması yapmaz.
- Demo sohbet mesajları yalnızca tarayıcı belleğinde tutulur; gerçek zamanlı değildir.
- Video oynatıcı şu an yer tutucudur; gerçek HLS akışı bağlı değildir.
- 7/24 yayın için lisanslı video dosyaları, FFmpeg tabanlı yayın işçisi, kalıcı sunucu/işlemci ve CDN gerekir. Vercel tek başına 7/24 video kodlama/yayın sunucusu değildir.
- Yaprak Dökümü bölümlerini yayınlamadan önce gerekli yayın ve yeniden iletim haklarını edinin.

Bu depo üretime hazır bir yayın sistemi değil, gerçek entegrasyonlara temel olacak başlangıç prototipidir.
