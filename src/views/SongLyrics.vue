<template>
  <v-card flat class="w-100 mx-auto mt-4" max-width="900" style="background: transparent;">
    <div style="margin: auto; margin-top: 10rem; max-width: 800px; height: 200px;border: 1px solid white;border-top-right-radius: 100px;border-bottom-right-radius: 100px;">
        <div style="background: grey; width: 200px;height: 100%;border-radius: 100%;border: 1px solid white;transform: scale(1.2);"></div>
    </div>
    <v-row class="h-auto ga-3" align="stretch">
      <v-col class="h-100 pa-4" cols="12" style="background: transparent">
        <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
          <v-card-title class="text-center text-white py-8">آهنگ ها</v-card-title>
          <v-card-text class="mx-4 rounded-xl pa-8 mb-5" style="background: transparent;">
            <v-row>
              <v-col cols="12">
                <v-expansion-panels v-model="activePanel">
                  <v-expansion-panel
                    v-for="(track, index) in tracks"
                    :key="index"
                    class="transition-all"
                    :style="getPanelStyle(index)"
                  >
                    <v-expansion-panel-title>
                      {{ track.titleFa }}
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                      <div v-if="typeof track.timedLyrics === 'string'" class="lyrics-box">
                        <div v-for="(line, i) in track.timedLyrics.split('…')" :key="i">
                          <div class="lyric-line-box">{{ line }}</div>
                          <div v-if="i < track.timedLyrics.split('…').length - 1" class="divider">
                            »──|♫●|──«
                          </div>
                        </div>
                      </div>

                      <div v-else class="lyrics-box">
                        <div v-for="(line, i) in track.timedLyrics" :key="i">
                          <div class="lyric-line-box">{{ line.text }}</div>
                          <div v-if="i < track.timedLyrics.length - 1" class="divider">
                            »──|♫●|──«
                          </div>
                        </div>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import {ref , watch , nextTick , onMounted } from 'vue'
const isPlaying = ref(false);
const selectedTrackIndex = ref(0);
const audioPlayer = ref(null)
const activePanel = ref(null) // پنل فعال

const getPanelStyle = (index) => {
  const isActive = activePanel.value === index
  return {
    background: isActive
      ? 'rgba(0, 0, 0, 0.9)' // وقتی باز است → مشکی تیره
      : 'rgba(255, 255, 255, 0.4)', // وقتی بسته است → طوسی روشن
    color: isActive ? 'white' : '#222',
    transition: 'all 0.4s ease',
    boxShadow: isActive ? '0 0 20px rgba(255,255,255,0.2)' : 'none',
    borderRadius: '12px'
  }
}


const formatLyrics = (lyrics) => {
  // اگر متن ساده بود، تبدیلش کن به آرایه‌ی خطی
  if (typeof lyrics === 'string') {
    return lyrics.split('\n').filter(line => line.trim() !== '');
  }
  // اگر قبلاً آرایه بود (مثل بقیه آهنگا)
  return lyrics.map(l => l.text);
};
    const tracks = [{
        title:'Mano Seda Bezan',
        titleFa:'منو صدا بزن',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 16, text: "آهنگساز: احسان نی زن          ترانه سرا : احسان نی زن          تنظیم کننده: احسان نی زن" },
    { time: 16, text: "حرفامو گفتم نگفته نمونه" },
    { time: 21, text: "یه ترسی تو چشماته که حال هردومونه…" },
  { time: 27, text: "منو با همه تنهاییام تنها گذاشتی" },
  { time: 33, text: "تو دست از سر دنیای من برنداشتی" },
  { time: 40, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 46, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 51, text: "یه چیزی بگو آروم بشم" },
  { time: 57, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 63, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 69, text: "یه چیزی بگو آروم بشم" },
  { time: 109, text: "یه کاری کنم تو قلب من آروم بگیری…" },
  { time: 114, text: "از این جا به بعد جایی نری" },
  { time: 118, text: "ببین حالتو دیوونه تو هر جا که باشی" },
  { time: 124, text: "تو دنیای من زیباتری…" },
  { time: 130, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 136, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 141, text: "یه چیزی بگو آروم بشم" },
  { time: 147, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 153, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 159, text: "یه چیزی بگو آروم بشم" },
]
    },
    {
        title:'Nafas',
        titleFa:'نفس',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 16, text: "حرفامو گفتم نگفته نمونه" },
    { time: 21, text: "یه ترسی تو چشماته که حال هردومونه…" },
  { time: 27, text: "منو با همه تنهاییام تنها گذاشتی" },
  { time: 33, text: "تو دست از سر دنیای من برنداشتی" },
  { time: 40, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 46, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 51, text: "یه چیزی بگو آروم بشم" },
  { time: 57, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 63, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 69, text: "یه چیزی بگو آروم بشم" },
  { time: 109, text: "یه کاری کنم تو قلب من آروم بگیری…" },
  { time: 114, text: "از این جا به بعد جایی نری" },
  { time: 118, text: "ببین حالتو دیوونه تو هر جا که باشی" },
  { time: 124, text: "تو دنیای من زیباتری…" },
  { time: 130, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 136, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 141, text: "یه چیزی بگو آروم بشم" },
  { time: 147, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 153, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 159, text: "یه چیزی بگو آروم بشم" },
]
    },
    {
        title:'Khial',
        titleFa:'خیال',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 16, text: "حرفامو گفتم نگفته نمونه" },
    { time: 21, text: "یه ترسی تو چشماته که حال هردومونه…" },
  { time: 27, text: "منو با همه تنهاییام تنها گذاشتی" },
  { time: 33, text: "تو دست از سر دنیای من برنداشتی" },
  { time: 40, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 46, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 51, text: "یه چیزی بگو آروم بشم" },
  { time: 57, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 63, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 69, text: "یه چیزی بگو آروم بشم" },
  { time: 109, text: "یه کاری کنم تو قلب من آروم بگیری…" },
  { time: 114, text: "از این جا به بعد جایی نری" },
  { time: 118, text: "ببین حالتو دیوونه تو هر جا که باشی" },
  { time: 124, text: "تو دنیای من زیباتری…" },
  { time: 130, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 136, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 141, text: "یه چیزی بگو آروم بشم" },
  { time: 147, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 153, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 159, text: "یه چیزی بگو آروم بشم" },
]
    },
    {
        title:'Mahtabe Man',
        titleFa:'مهتاب من',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%204%20(320).mp3',
        timedLyrics:[
  { time: 11, text: "در بزن خانه ام امشب تویی مهمانم" },
  { time: 16, text: "من که دیوانه ام امشب تویی مهمانم" },
  { time: 21, text: "آخرین دل که به تو داده دلم میکشدم…" },
  { time: 26, text: "آنچه آمد سر این ساده دلم میکشدم" },
  { time: 31, text: "چه شود اگر غم تو اگر در دلم نماند" },
  { time: 39, text: "ای جان من قربانت دل برده آن چشمانت…" },
  { time: 43, text: "چشمون بی ایمانت زده آتش به جانم" },
  { time: 48, text: "هم با تو جان میگیرم هم در غمت میمیرم" },
  { time: 53, text: "رویای بی تعبیرم تویی هم جان و جهانم…" },
  { time: 78, text: "مهتاب من خوابیده تا این حسرت هر ساله به یلدا نرسد" },
  { time: 88, text: "لبخند بزن محبوب تا بگذرم از گریه به دریا نرسد" },
  { time: 98, text: "ای جان من قربانت دل برده آن چشمانت…" },
  { time: 103, text: "چشمون بی ایمانت زده آتش به جانم" },
  { time: 108, text: "هم با تو جان میگیرم هم در غمت میمیرم" },
  { time: 113, text: "رویای بی تعبیرم تویی هم جان و جهانم…" },
]
    },
    {
        title:'Ghalbe Man',
        titleFa:'قلب من',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%203(320).mp3',
        timedLyrics:[
  { time: 26, text: "تمام قلب من مرا صدا بزن" },
  { time: 32, text: "که این دل شکسته را به گریه می نشانم امشب…" },
  { time: 42, text: "که از تو بخوانم امشب" },
  { time: 55, text: "عزیز جان من غم جهان من تو رفته ای" },
  { time: 61, text: "ولی هنوز تمام تو ادامه داره…" },
  { time: 69, text: "هوایت نمیگزاره" },
  { time: 77, text: "از این فاصله رها کن مرا که داغ جدایی امانم دهد" },
  { time: 86, text: "به دریا اگر رسیدی بگو که آبی بر آتش نشانم دهد…" },
  { time: 95, text: "تو از قلب من گذر می کنی همان لحظه باران به تو میرسد" },
  { time: 104, text: "خیال تو را قدم می زنم تمام خیابان به تو می رسد" },
  { time: 137, text: "تو را در خانه ام می خواهم امشب" },
  { time: 143, text: "سری بر شانه ام میخواهم امشب…" },
  { time: 150, text: "صدایم کن صدایم کن اگر خوابم بگیرد" },
  { time: 160, text: "دلم در آتش عشقت نمیرد" },
  { time: 169, text: "از این فاصله رها کن مرا که داغ جدایی امانم دهد" },
  { time: 178, text: "به دریا اگر رسیدی بگو که آبی بر آتش نشانم دهد…" },
  { time: 187, text: "تو از قلب من گذر می کنی همان لحظه باران به تو میرسد" },
  { time: 197, text: "خیال تو را قدم می زنم تمام خیابان به تو می رسد" },
  { time: 206, text: "تمام خیابان به تو می رسد" },
]
    },
     {
        title:'Roo Be Roo',
        titleFa:'روبرو',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%208%20(320).mp3',
        timedLyrics:[
  { time: 19, text: "خوب میدونم زندگی اون جور که می گفتن نبود" },
  { time: 23, text: "نگو نشد این و میدونم قلب تو با من نبود…" },
  { time: 28, text: "دیگه حرفشو با من نزن" },
  { time: 30, text: "چشماتو بستی رو من" },
  { time: 33, text: "دیره به دریا زدن من دلم ترسیده" },
  { time: 39, text: "بیا باز من و درگیر این دل نکن بد نکن…" },
  { time: 44, text: "میخوای نمونی بگو بهونه پیدا نکن" },
  { time: 48, text: "چرا باز من و با اون چشات رو به رو میکنی" },
  { time: 53, text: "این دل دیونه رو راهی دریا نکن" },
  { time: 57, text: "من و دوباره تنها نکن…" },
  { time: 80, text: "من و کشتی که یادم نره اون که عاشقتره" },
  { time: 85, text: "دیگه باید از این غصه بمیره" },
  { time: 89, text: "تو که رحمی نداری به من…" },
  { time: 92, text: "عشق و به آتیش نزن" },
  { time: 94, text: "دیگه من نفسم نمی گیره" },
  { time: 98, text: "اون که تنهاس داره میره…" },
   { time: 104, text: "بیا باز من و درگیر این دل نکن بد نکن…" },
  { time: 109, text: "میخوای نمونی بگو بهونه پیدا نکن" },
  { time: 113, text: "چرا باز من و با اون چشات رو به رو میکنی" },
  { time: 118, text: "این دل دیونه رو راهی دریا نکن" },
  { time: 123, text: "من و دوباره تنها نکن…" },
  { time: 141, text: " باز من و درگیر این دل نکن بد نکن…" },
  { time: 146, text: "میخوای نمونی بگو بهونه پیدا نکن" },
  { time: 150, text: "چرا باز من و با اون چشات رو به رو میکنی" },
  { time: 155, text: "این دل دیونه رو راهی دریا نکن" },
  { time: 159, text: "من و دوباره تنها نکن…" },
]
    },
    {
        title:'Bade To',
        titleFa:'بعد تو',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%207%20(320).mp3',
        timedLyrics:[
  { time: 21, text: "مثل آخرای پاییز رنگ و بوی غم گرفتم" },
  { time: 29, text: "خودمو دست تو دادم تورو از خودم گرفتم…" },
  { time: 36, text: "بعد تو تو بغل کی بغضمو خالی کنم" },
  { time: 44, text: "حال بی تو بودنامو جز خود تو من به کی حالی کنم" },
  { time: 56, text: "قلبم جونم هم قد این تنها شدن نیست…" },
  { time: 64, text: "هستم اما این زنده بودن حق من نیست" },
  { time: 71, text: "رفتی دیدم من دیگه رویایی ندارم" },
  { time: 79, text: "حتی زیر سقف خودم جایی ندارم…" },
  { time: 119, text: "چقدر روزای بعد رفتنت سنگین" },
  { time: 127, text: "برف کی بی وقفه داره رو سرم میشینه" },
  { time: 134, text: "صورتم جنگل بارون زده تو پاییز…" },
  { time: 142, text: "سیل برگام اگه داره تو خودم میریزه" },
  { time: 153, text: "قلبم جونم هم قد این تنها شدن نیست…" },
  { time: 160, text: "هستم اما این زنده بودن حق من نیست" },
  { time: 168, text: "رفتی دیدم من دیگه رویایی ندارم" },
  { time: 176, text: "حتی زیر سقف خودم جایی ندارم…" },
]
    },
     {
        title:'Mashhor',
        titleFa:'مشهور',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%207%20(320).mp3',
        timedLyrics:[
  { time: 21, text: "مثل آخرای پاییز رنگ و بوی غم گرفتم" },
  { time: 29, text: "خودمو دست تو دادم تورو از خودم گرفتم…" },
  { time: 36, text: "بعد تو تو بغل کی بغضمو خالی کنم" },
  { time: 44, text: "حال بی تو بودنامو جز خود تو من به کی حالی کنم" },
  { time: 56, text: "قلبم جونم هم قد این تنها شدن نیست…" },
  { time: 64, text: "هستم اما این زنده بودن حق من نیست" },
  { time: 71, text: "رفتی دیدم من دیگه رویایی ندارم" },
  { time: 79, text: "حتی زیر سقف خودم جایی ندارم…" },
  { time: 119, text: "چقدر روزای بعد رفتنت سنگین" },
  { time: 127, text: "برف کی بی وقفه داره رو سرم میشینه" },
  { time: 134, text: "صورتم جنگل بارون زده تو پاییز…" },
  { time: 142, text: "سیل برگام اگه داره تو خودم میریزه" },
  { time: 153, text: "قلبم جونم هم قد این تنها شدن نیست…" },
  { time: 160, text: "هستم اما این زنده بودن حق من نیست" },
  { time: 168, text: "رفتی دیدم من دیگه رویایی ندارم" },
  { time: 176, text: "حتی زیر سقف خودم جایی ندارم…" },
]
    },
    {
        title:'Chi Mishe Goft',
        titleFa:'چی میشه گفت',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%205%20(320).mp3',
        timedLyrics:[
  { time: 15, text: "بغضمو خالی نکردم با یه دنیا خنده رفتی" },
  { time: 23, text: "خیلی حرفا رو نگفتم حس کنی برنده رفتی…" },
  { time: 31, text: "خیلی حرفا رو نگفتم نه واسه این که ندونی" },
  { time: 38, text: "اگه میگفتم عذابش نمیزاشت زنده بمونی" },
  { time: 50, text: "چی میشه گفت به اون کسی که…" },
  { time: 55, text: "بعد یک عمر زندگی حتی منو ندیده یک بار" },
  { time: 65, text: "کسی که وقت رفتنش هر چی تماشا کردمش" },
  { time: 74, text: "حتی نگفت خدا نگهدار…" },
  { time: 81, text: "چی میشه گفت به اون کسی که…" },
  { time: 85, text: "بعد یک عمر زندگی حتی منو ندیده یک بار" },
  { time: 95, text: "کسی که وقت رفتنش هر چی تماشا کردمش" },
  { time: 104, text: "حتی نگفت خدا نگهدار…" },
  { time: 139, text: "مثل تنهایی جامونده توی پاییزم" },
  { time: 147, text: "که دارم غربتمو توی خودم میریزم" },
  { time: 154, text: "هر دفعه یاد نگاه آخرت میافتم…" },
  { time: 162, text: "میگم ای کاش از دلم چیزی بهش میگفتم" },
  { time: 172, text: "چی میشه گفت به اون کسی که…" },
  { time: 177, text: "بعد یک عمر زندگی حتی منو ندیده یک بار" },
  { time: 187, text: "کسی که وقت رفتنش هر چی تماشا کردمش" },
  { time: 196, text: "حتی نگفت خدا نگهدار…" },
  { time: 203, text: "چی میشه گفت به اون کسی که…" },
  { time: 207, text: "بعد یک عمر زندگی حتی منو ندیده یک بار" },
  { time: 217, text: "کسی که وقت رفتنش هر چی تماشا کردمش" },
  { time: 225, text: "حتی نگفت خدا نگهدار…" },
]
    },
    {
        title:'Bebin Haleto',
        titleFa:'ببین حالتو',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%202(320).mp3',
timedLyrics: [
    { time: 16, text: "حرفامو گفتم نگفته نمونه" },
    { time: 21, text: "یه ترسی تو چشماته که حال هردومونه…" },
  { time: 27, text: "منو با همه تنهاییام تنها گذاشتی" },
  { time: 33, text: "تو دست از سر دنیای من برنداشتی" },
  { time: 40, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 46, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 51, text: "یه چیزی بگو آروم بشم" },
  { time: 57, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 63, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 69, text: "یه چیزی بگو آروم بشم" },
  { time: 109, text: "یه کاری کنم تو قلب من آروم بگیری…" },
  { time: 114, text: "از این جا به بعد جایی نری" },
  { time: 118, text: "ببین حالتو دیوونه تو هر جا که باشی" },
  { time: 124, text: "تو دنیای من زیباتری…" },
  { time: 130, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 136, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 141, text: "یه چیزی بگو آروم بشم" },
  { time: 147, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 153, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 159, text: "یه چیزی بگو آروم بشم" },
]
    },
    
    
    
    {
        title:'Yadete',
        titleFa:'یادته',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%206%20(320).mp3',
        timedLyrics:[
  { time: 14, text: "نمیدونم اون همه خاطره چجوری از یادم باید بره" },
  { time: 19, text: "خیلی چیزا روی قلبم بعد چشمات بی اثره…" },
  { time: 26, text: "تو میگفتی وقتی دورم کل دنیا ساکته" },
  { time: 32, text: "یادته روزای خوب اون رابطه" },
  { time: 40, text: "تو رو دلم میخاد به کی بگم من که مثل تو نبودم…" },
  { time: 45, text: "کاش که پاک شه از وجودم خاطراتت" },
  { time: 52, text: "مثل یه سایه عطر تو با منه مگه آدم از آهن" },
  { time: 58, text: "دلمو آتیش میزنه خاطراتت…" },
  { time: 91, text: "واسه ی دیدنت من هنوز منتظر فرصتم" },
  { time: 98, text: "یه روزی میرسه میبینی من همون گمشدتم" },
  { time: 104, text: "عادت منی تو سختمه ترک این عادتم…" },
  { time: 114, text: "تو رو دلم میخاد به کی بگم من که مثل تو نبودم…" },
  { time: 119, text: "کاش که پاک شه از وجودم خاطراتت" },
  { time: 126, text: "مثل یه سایه عطر تو با منه مگه آدم از آهن" },
  { time: 132, text: "دلمو آتیش میزنه خاطراتت…" },
]
    },
    
    {
        title:'Dastamo Begir',
        titleFa:'دستمو بگیر',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
  { time: 26, text: "من مثل اون قایقم که دل به زیبایی تو داده" },
  { time: 35, text: "واسه من موهات دریای آزاده…" },
  { time: 42, text: "از چی میترسی عزیزم من که قلبمو بهت دادم" },
  { time: 52, text: "مگه جز قلبش چی داره یه آدم" },
  { time: 60, text: "بزن بزن بزن دل منو دلی که میمیره برات…" },
  { time: 67, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 74, text: "بزن بزن بزن دل منو صیاد عاشق کش من" },
  { time: 83, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
  { time: 110, text: "تمام دنیامو میدم واسه ی لحظه نگات" },
  { time: 117, text: "خودت میدونی از کل دنیا منم که میمونم برات" },
  { time: 124, text: "ی جوری دستمو بگیر که حست از یادم نره…" },
  { time: 131, text: "جوری نگام کن جوری بخند که انگاری بار آخره" },
  { time: 143, text: "بزن بزن بزن دل منو دلی که میمیره برات…" },
  { time: 150, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 158, text: "بزن بزن بزن دل منو صیاد عاشق کش من" },
  { time: 166, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
]
    },
    {
        title:'Bebin Haleto',
        titleFa:'ببین حالتو(ویولن)',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%2010%20(320).mp3',
        timedLyrics:[
    { time: 16, text: "حرفامو گفتم نگفته نمونه" },
    { time: 21, text: "یه ترسی تو چشماته که حال هردومونه…" },
  { time: 27, text: "منو با همه تنهاییام تنها گذاشتی" },
  { time: 33, text: "تو دست از سر دنیای من برنداشتی" },
  { time: 40, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 46, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 51, text: "یه چیزی بگو آروم بشم" },
  { time: 57, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 63, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 69, text: "یه چیزی بگو آروم بشم" },
  { time: 109, text: "یه کاری کنم تو قلب من آروم بگیری…" },
  { time: 114, text: "از این جا به بعد جایی نری" },
  { time: 118, text: "ببین حالتو دیوونه تو هر جا که باشی" },
  { time: 124, text: "تو دنیای من زیباتری…" },
  { time: 130, text: "یه روزی دلتنگم میشی یادت باشه…" },
  { time: 136, text: "چجوری به قلبت میگی ساکت باشه" },
  { time: 141, text: "یه چیزی بگو آروم بشم" },
  { time: 147, text: "یه روزی دلتنگت میشم یادم میره…" },
  { time: 153, text: "همیشه قلبمو به هر کی دادم میره" },
  { time: 159, text: "یه چیزی بگو آروم بشم" },
]
    }]
</script>

<style>
 .lyrics-box {
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 1.2rem;
  line-height: 2.2;
  padding: 10px;
  border-radius: 8px;
}

.lyric-line-box {
  display: inline-block;
  padding: 5px 15px;
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
}


.divider {
  color: #ff00d4f5;
  font-weight: bold;
  opacity: 0.8;
  letter-spacing: 2px;
  margin: 10px 0;
  text-shadow: 0 0 8px rgb(255, 196, 0);
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.6;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>