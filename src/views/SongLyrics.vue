<!-- <template>
  <v-card flat class="w-100 mx-auto mt-4" max-width="900" style="background: transparent;">
    <div
  class="outer-box"
>
  <div class="inner-logo"></div>
</div>
    <v-row class="h-auto ga-3" align="stretch">
      <v-col class="h-100 pa-4" cols="12" style="background: transparent">
        <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
          <v-card-title class="text-center text-white py-8"> متن آهنگ های کنسرت  2 آبان</v-card-title>
          <v-card-text class="mx-4 rounded-xl pa-  mb-5" style="background: transparent;">
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
                        
                          </div>
                        </div>
                      </div>

                      <div v-else class="lyrics-box">
                        <div v-for="(line, i) in track.timedLyrics" :key="i">
                          <div class="lyric-line-box">{{ line.text }}</div>
                          <div v-if="i < track.timedLyrics.length - 1" class="divider">
                        
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
const activePanel = ref(null) 

const getPanelStyle = (index) => {
  const isActive = activePanel.value === index
  return {
    background: isActive
      ? 'rgba(0, 0, 0, 0.9)' 
      : 'rgba(255, 255, 255, 0.4)', 
    color: isActive ? 'white' : '#222',
    transition: 'all 0.4s ease',
    boxShadow: isActive ? '0 0 20px rgba(255,255,255,0.2)' : 'none',
    borderRadius: '12px',
     transform: isActive ? 'scale(1.05)' : 'scale(1)',
  }
}


const formatLyrics = (lyrics) => {
  
  if (typeof lyrics === 'string') {
    return lyrics.split('\n').filter(line => line.trim() !== '');
  }
 
  return lyrics.map(l => l.text);
};
    const tracks = [
    {
        title:'Mano Seda Bezan',
        titleFa:'منو صدا بزن',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
     { time: 16, text: "ترانه : مریم دلشاد" },
     { time: 16, text: "آهنگساز: احسان نی زن" },
      { time: 16, text: "من که گفتم زندگیمو به تو بستم" },
      { time: 22, text: "گفتی هستم منو بگو که باورم شد" },
      { time: 30, text: "گفته بودم از غم عشق دل شکستم، گفتی هستم" },
      { time: 39, text: "چرا دوباره باورم شد؟" },
      { time: 44, text: "غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره" },
      { time: 52, text: " عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره" },
      { time: 64, text: "به هر طرف که رو کنم، برمیگردم، مگه خیال تو میذاره" },
     { time: 72, text: "کجا قدم زدی که از هر جا میرم، تورو به یاد من میاره" },
     { time: 80, text: "نفس که میکشم تورو حالم خوبه، هوای تو ادامه داره" },
     { time: 88, text: "اگه صداتو بشنوم آروم میشم، منو صدا بزن دوباره" },
     { time: 96, text: "منو صدا بزن دوباره" },
     { time: 134, text: "برم، کدوم دردو پیش کی ببارم بگو، کجای دلم تو رو بزارم" },
     { time: 145, text: "که کارم شده گریه کردن عزیزم چه کردی تو با من" },
     { time: 156, text: "به هر طرف که رو کنم برمیگردم، مگه خیال تو میذاره" },
     { time: 164, text: "کجا قدم زدی که از هر جا میرم، تورو به یاد من میاره" },
      { time: 172, text: "نفس که میکشم تورو حالم خوبه، هوای تو ادامه داره" },
     { time: 180, text: "اگه صداتو بشنوم آروم میشم، منو صدا بزن دوباره" },
     { time: 188, text: "منو صدا بزن دوباره" },
    ],
    },
    {
        title:'Nafas',
        titleFa:'نفس',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 0, text: "شاعر : محسن شیرعلی" },
   { time: 0, text: "کاری کردی با دلم، که قد یه دریا شه" },
  { time: 6, text: "قسم آخر این مرد، رنگ چشمات باشه" },
  { time: 12, text: "دست می‌ذارم روی قلبم، اسمت هر جا اومد" },
  { time: 18, text: "چه‌جوری میشه به چشم یه نفر، این‌همه زیبا اومد" },
  { time: 24, text: "مستم کن از عطر موهات، که از همه دل کندم" },
  { time: 30, text: "موهاتو وا کن، چشمای شب رو خودم می‌بندم" },
  { time: 36, text: "من از همه دل کندم" },
  { time: 42, text: "برای زندگی مگه دلیلی بهتر از تو هست" },
  { time: 48, text: "به‌جای اسمت همه‌جا بذار صدات کنم نفس" },
  { time: 48, text: "بذار صدات کنم نفس" },
  { time: 54, text: "وقتی که پیش من میای، دریایی از آرامشم" },
  { time: 60, text: "ساعتو می‌کشم عقب، بیشتر بهت خیره بشم" },
  { time: 66, text: "صدام بزن، صدای تو منو به رویا می‌بره" },
  { time: 72, text: "هرچی به‌جز صدای تو رو قلب من بی‌اثره" },
{ time: 72, text: "مستم كن از عطر موهات كه از همه دل كندم" },
{ time: 72, text: "موهاتو وا كن چشماي شب رو خودم مي بندم " },
{ time: 72, text: "من از همه دل كندم " },
{ time: 42, text: "برای زندگی مگه دلیلی بهتر از تو هست" },
  { time: 48, text: "به‌جای اسمت همه‌جا بذار صدات کنم نفس" },
{ time: 48, text: "بذار صدات کنم نفس" },
]
    },
    {
        title:'Khial',
        titleFa:'خیال',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 0, text: "به دریا زدم موج یاری نکرد" },
  { time: 6, text: "منو از خیالت فراری نکرد" },
  { time: 12, text: "به صحرا زدم از غم عشق تو" },
  { time: 18, text: "بیابون با فکر تو کاری نکرد" },
  { time: 24, text: "به صحرا زدم برنگرده دلم" },
  { time: 30, text: "به دریا زدم قصه جذاب شه" },
  { time: 36, text: "تو آتیش و وقتی یخ می‌زنم" },
  { time: 42, text: "برای تو باید دلم آب شه" },
  { time: 42, text: "برای تو باید دلم آب شه" },
  { time: 48, text: "برم سمت دریا، تمامش تویی" },
  { time: 54, text: "برم رو به صحرا، تمامش تویی" },
  { time: 60, text: "کجا از خیالت بذارم برم" },
  { time: 66, text: "یه گوشه کناری نشونم بده" },
  { time: 72, text: "یه راه فراری نشونم بده" },
  { time: 78, text: "دیگه هیچ جایی ندارم برم" },
  { time: 84, text: "خیال تو هم تیر هم سنگره" },
  { time: 90, text: "خیال تو از رود جاری‌تره" },
  { time: 96, text: "نشستم ببینم که این لعنتی" },
  { time: 102, text: "منو در نهایت کجا می‌بره" },
  { time: 108, text: "یه حسی که هم سنگ آرامشه" },
  { time: 114, text: "منو سمت طوفان تو می‌کشه" },
  { time: 120, text: "واسه درک حالم دعا می‌کنم" },
  { time: 126, text: "که هر جای دنیایی طوفان شه" },
    { time: 126, text: "که هر جای دنیایی طوفان شه" },
  { time: 132, text: "برم سمت دریا، تمامش تویی" },
  { time: 138, text: "برم رو به صحرا، تمامش تویی" },
  { time: 144, text: "کجا از خیالت بذارم برم" },
  { time: 150, text: "یه گوشه کناری نشونم بده" },
  { time: 156, text: "یه راه فراری نشونم بده" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
  { time: 132, text: "برم سمت دریا، تمامش تویی" },
  { time: 138, text: "برم رو به صحرا، تمامش تویی" },
  { time: 144, text: "کجا از خیالت بذارم برم" },
  { time: 150, text: "یه گوشه کناری نشونم بده" },
  { time: 156, text: "یه راه فراری نشونم بده" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
]
    },
    {
        title:'Mahtabe Man',
        titleFa:'مهتاب من',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%204%20(320).mp3',
        timedLyrics:[
{ time: 0, text: "شعر : مریم دلشاد" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 11, text: "در بزن خانه ام امشب تویی مهمانم" },
  { time: 16, text: "من که دیوانه ام امشب تویی مهمانم" },
  { time: 21, text: "آخرین دل که به تو داده دلم میکشدم…" },
  { time: 26, text: "آنچه آمد سر این ساده دلم میکشدم" },
  { time: 31, text: "چه شود اگر غم تو اگر در دلم نماند" },
  { time: 39, text: "ای جان من قربانت دل برده آن چشمانت…" },
  { time: 43, text: "چشمون بی ایمانت زده آتش به جانم" },
  { time: 48, text: "هم با تو جان میگیرم هم در غمت میمیرم" },
  { time: 53, text: "رویای بی تعبیرم تویی جان و جهانم…" },
  { time: 78, text: "مهتاب من خوابیده تا این حسرت هر ساله به یلدا نرسد" },
  { time: 88, text: "لبخند بزن محبوب من تا بغض من از گریه به دریا نرسد" },
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
            { time: 0, text: "شعر : مریم دلشاد" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 26, text: "تمام قلب من مرا صدا بزن" },
  { time: 32, text: "که این دل شکسته را به گریه می نشانم امشب…" },
  { time: 42, text: "که از تو بخوانم امشب" },
  { time: 55, text: "عزیز جان من غم جهان من تو رفته ای" },
  { time: 61, text: "ولی هنوز تمام تو ادامه داره…" },
  { time: 69, text: "هوایت نمیگذارد" },
  { time: 77, text: "از این فاصله رها کن مرا که داغ جدایی امانم دهد" },
  { time: 86, text: "به دریا اگر رسیدی بگو که آبی بر آتش نشانم دهد…" },
  { time: 95, text: "تو از قلب من گذر می کنی همان لحظه باران به تو میرسد" },
  { time: 104, text: "خیال تو را قدم می زنم تمام خیابان به تو می رسد" },
  { time: 137, text: "تو را در خانه ام می خواهم امشب" },
  { time: 143, text: "سری بر شانه ام میخواهم امشب…" },
  { time: 150, text: "صدایم کن صدایم کن مگر خوابم بگیرد" },
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
            { time: 0, text: "شعر : روزبه بمانی" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 21, text: "مثل آخرای پاییز رنگ و بوی غم گرفتم" },
  { time: 29, text: "خودمو دست تو دادم تورو از خودم گرفتم…" },
  { time: 36, text: "بعد تو توو بغل کی بغضمو خالی کنم" },
  { time: 44, text: "حال بی تو بودنامو جز خود تو من به کی حالی کنم" },
  { time: 56, text: "قلبم، جونم هم قد این تنها شدن نیست…" },
  { time: 64, text: "هستم، اما این زنده بودن حق من نیست" },
  { time: 71, text: "رفتی، دیدم من دیگه رویایی ندارم" },
  { time: 79, text: "حتی زیر سقف خودم جایی ندارم…" },
  { time: 119, text: "چقدر روزای بعد رفتنت سنگینه" },
  { time: 127, text: "برفه کی بی وقفه داره رو سرم میشینه" },
  { time: 134, text: "صورتم جنگل بارون زده تو پاییزه…" },
  { time: 142, text: "سیل برگامه اگه داره تو خودم میریزه" },
  { time: 153, text: "قلبم، جونم هم قد این تنها شدن نیست…" },
  { time: 160, text: "هستم، اما این زنده بودن حق من نیست" },
  { time: 168, text: "رفتی، دیدم من دیگه رویایی ندارم" },
  { time: 176, text: "حتی زیر سقف خودم جایی ندارم…" },
]
    },
     {
        title:'Mashhor',
        titleFa:'مشهور',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%207%20(320).mp3',
        timedLyrics:[
  { time: 0, text: "نمیشه مثل تورو پیدا کرد" },
  { time: 6, text: "نه میشه حسابی رو تو وا کرد" },
  { time: 12, text: "نمیدونم خودمم موندم با تو باید چیکار کرد" },
  { time: 18, text: "عاشق شدم و سخته از تو بشه فرار کرد" },
  { time: 24, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 30, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 36, text: "من بلد نیستم که از تو دور باشم" },
  { time: 42, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
  { time: 48, text: "خواستن تو که سختی یه جور عادته" },
  { time: 54, text: "راحته هرجا باشم این دل ساده زیر سایته" },
  { time: 60, text: "تو با خونسردی عاشقم کردی" },
  { time: 66, text: "هرجا بری برمی‌گردی" },
  { time: 72, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 78, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 84, text: "من بلد نیستم که از تو دور باشم" },
  { time: 90, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
  { time: 96, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 102, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 108, text: "من بلد نیستم که از تو دور باشم" },
  { time: 114, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
   { time: 72, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 78, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 84, text: "من بلد نیستم که از تو دور باشم" },
  { time: 90, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
]
    },
    {
        title:'Chi Mishe Goft ',
        titleFa:'چی میشه گفت',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%205%20(320).mp3',
        timedLyrics:[
             { time: 0, text: "شاعر : روزبه بمانی" },
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
        title:'az to neveshtam',
        titleFa:'از تو نوشتم',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%202(320).mp3',
timedLyrics: [
    { time: 0, text: "ترانه : مریم دلشاد" },
    { time: 0, text: "این همه از تو نوشتم این همه ورق سوزوندم" },
  { time: 6, text: "عمرم و برات گذاشتم این همه پای تو موندم" },
  { time: 12, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
  { time: 18, text: "این همه خون به دلم شد حرفم و تو سینه کشتم" },
  { time: 24, text: "از خودم به آینه گفتم زخم تو مونده رو مشتم" },
  { time: 30, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
  { time: 36, text: "اگه دنیا رو میخواستی من بهت نه نمی‌گفتم" },
  { time: 42, text: "منِ تنها رو میخواستی، من بهت نه نمی‌گفتم" },
  { time: 48, text: "چی میخواستی از غرورم که واست کنار نذاشتم" },
  { time: 54, text: "دل دریا رو می‌خواستی، من بهت نه نمی‌گفتم" },
  { time: 60, text: "منو هر طرف کشوندی دور دنیای تو گشتم" },
  { time: 66, text: "عشق و از خطر نترسون من که از خودم گذشتم" },
  { time: 72, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
{ time: 36, text: "اگه دنیا رو میخواستی من بهت نه نمی‌گفتم" },
  { time: 42, text: "منِ تنها رو میخواستی، من بهت نه نمی‌گفتم" },
  { time: 48, text: "چی میخواستی از غرورم که واست کنار نذاشتم" },
  { time: 54, text: "دل دریا رو می‌خواستی، من بهت نه نمی‌گفتم" },
]
    },
    
    
    
    {
        title:'bavar nakardi',
        titleFa:'باور نکردی',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%206%20(320).mp3',
        timedLyrics:[
  { time: 0, text: "دلشوره‌هامو کمتر نکردی" },
  { time: 5, text: "گفتم تمومه باور نکردی" },
  { time: 10, text: "بازم ندیدی چی آرزومه" },
  { time: 15, text: "گفتی تمومه گفتم تمومه" },
  { time: 21, text: "غیر از غرورم چی تو دلت بود" },
  { time: 26, text: "میرم بفهمی کی عاشقت بود" },
  { time: 31, text: "میرم بفهمی با رفتن من آینده‌ی تو زیبا نمیشه" },
  { time: 38, text: "اندازه‌ی من تو کل دنیا دیوونه‌ی تو پیدا نمیشه" },
  { time: 45, text: "میرم که پای دلشوره‌های بی‌وقفه‌ی تو هر شب نشینم" },
  { time: 52, text: "میرم نباشم میرم بمیرم میرم تورو با کسی نبینم" },
  { time: 59, text: "قلب تو قد دنیای من نیست" },
  { time: 64, text: "میرم بفهمی این جای من نیست" },
  { time: 69, text: "دیوونه‌بازیت جز بچگی نیست" },
  { time: 74, text: "این حرص دریا از تشنگی نیست" },
  { time: 79, text: "غیر از غرورم چی تو دلت بود" },
  { time: 84, text: "میرم بفهمی کی عاشقت بود" },
  { time: 89, text: "میرم بفهمی با رفتن من آینده‌ی تو زیبا نمیشه" },
  { time: 96, text: "اندازه‌ی من تو کل دنیا دیوونه‌ی تو پیدا نمیشه" },
  { time: 103, text: "میرم که پای دلشوره‌های بی‌وقفه‌ی تو هر شب نشینم" },
  { time: 110, text: "میرم نباشم میرم بمیرم میرم تورو با کسی نبینم" },
  
]
    },
    
    {
        title:'dard dori',
        titleFa:'درد دوری',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
        { time: 0, text: "شاعر : محسن شیرعلی" },
  { time: 0, text: "من که کل زندگیم جنگیدم" },
  { time: 6, text: "از نگاه سرد تو ترسیدم" },
  { time: 11, text: "گفته بودی که دلت با من نیست" },
  { time: 16, text: "چرا این حرفتو دیر فهمیدم" },
  { time: 22, text: "نمیدونم دیگه چی باید بشه" },
  { time: 27, text: "که بفهمی درد دوریت کم نیست" },
  { time: 32, text: "با من دیوونه کاری کردی" },
  { time: 36, text: "که دیگه قبل تورو یادم نیست" },
  { time: 41, text: "مثل آتیشی شدم سخته که خاموشم کنی" },
  { time: 47, text: "من کسی نیستم که راحت بخوای فراموشم کنی" },
  { time: 53, text: "منو از چیزی نترسون وقتی تنها موندم" },
  { time: 59, text: "من همیشه فکر میکردم که تو برمیگردی" },
  { time: 65, text: "یه روزی که جای من بودی خودت میفهمی" },
  { time: 70, text: "که چرا با اینکه رفتی هنوز اینجا موندم" },
  { time: 76, text: "کار من نیست اینکه میگن تورو نادیده بگیرم" },
  { time: 81, text: "اینا که نمیدونن چرا واست میمیرم" },
  { time: 86, text: "برگرد باید کاری کنی برام" },
  { time: 91, text: "دست من نیست اینکه تورو نخوام" },
  { time: 96, text: "مثل آتیشی شدم سخته که خاموشم کنی" },
  { time: 102, text: "من کسی نیستم که راحت بخوای فراموشم کنی" },
  { time: 108, text: "منو از چیزی نترسون وقتی تنها موندم" },
  { time: 114, text: "من همیشه فکر میکردم که تو برمیگردی" },
  { time: 120, text: "یه روزی که جای من بودی خودت میفهمی" },
  { time: 125, text: "که چرا با اینکه رفتی هنوز اینجا موندم" },
]
    },
    {
        title:'Bebin Haleto',
        titleFa:'ببین حالتو',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%2010%20(320).mp3',
        timedLyrics:[
            { time: 16, text: "شاعر : احمد خلیلی" },
             { time: 16, text: "آهنگساز و خواننده : احسان نی زن " },
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
        title:'Dastamo Begir',
        titleFa:'دستمو بگیر',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
  { time: 26, text: "من مثل اون قایقم که دل به زیبایی تو داده" },
  { time: 35, text: "واسه من موهات دریای آزاده…" },
  { time: 42, text: "از چی میترسی عزیزم من که قلبمو بهت دادم" },
  { time: 52, text: "مگه جز قلبش چی داره یه آدم" },
  { time: 60, text: "بزن بزن دل منو دلی که میمیره برات…" },
  { time: 67, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 74, text: "بزن بزن دل منو صیاد عاشق کش من" },
  { time: 83, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
  { time: 110, text: "تمام دنیامو میدم واسه ی لحظه نگات" },
  { time: 117, text: "خودت میدونی از کل دنیا منم که میمونم برات" },
  { time: 124, text: "ی جوری دستمو بگیر که حست از یادم نره…" },
  { time: 131, text: "جوری نگام کن جوری بخند که انگاری بار آخره" },
   { time: 131, text: "انگاری بار آخره" },
  { time: 143, text: "بزن بزن دل منو دلی که میمیره برات…" },
  { time: 150, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 158, text: "بزن بزن دل منو صیاد عاشق کش من" },
  { time: 166, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
]
    },
    {
        title:'halamo ki dare',
        titleFa:'حالمو کی داره',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
{ time: 16, text: "آهنگساز و خواننده : احسان نی زن" },
{ time: 17, text: "ترانه سرا : احمد امیر خلیلی" },
  { time: 0, text: "من و شب و بارون، تو و من" },
  { time: 5, text: "حالمو کی داره" },
  { time: 9, text: "قد یه نگا عاشقت شدن" },
  { time: 13, text: "حالمو کی داره" },
  { time: 17, text: "تو که همه دنیامی، خودِ چشمامی" },
  { time: 22, text: "دوباره، نشستی، تو قلبم، بگو حالمو کی داره؟" },
  { time: 29, text: "از من، بهتر، کی می‌تونه عاشق بشه" },
  { time: 34, text: "عمرم، جونم، چشای تو عاشق‌کُشه" },
  { time: 39, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 44, text: "از تو، بهتر، کی توو دل من خونه کرد" },
  { time: 49, text: "عشقم، قلبم، دلمو کی دیوونه کرد" },
  { time: 54, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 59, text: "وقتی که می‌خندی" },
  { time: 63, text: "کار من تمومه" },
  { time: 67, text: "توو چشام ببین عاشقت شدم کیه که ندونه" },
  { time: 73, text: "حال هردومونه" },
  { time: 77, text: "عشقه یا جنونه" },
  { time: 81, text: "مث من واست مگه کسی هست اینقده دیوونه" },
  { time: 29, text: "از من، بهتر، کی می‌تونه عاشق بشه" },
  { time: 34, text: "عمرم، جونم، چشای تو عاشق‌کُشه" },
  { time: 39, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 44, text: "از تو، بهتر، کی توو دل من خونه کرد" },
  { time: 49, text: "عشقم، قلبم، دلمو کی دیوونه کرد" },
  { time: 54, text: "آخه توو نگات چی داری که دلم رفت" },
]
    }
    ]
</script>

<style>

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


.outer-box {
  margin: auto;
  margin-top: 10rem;
  max-width: 90vw;
  width: 800px;
  height: 200px;
  border: 1px solid white;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  transition: all 0.3s ease;
}

.inner-logo {
  width: clamp(100px, 25%, 180px); 
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid white;
  background-image: url('/imgs/logo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.inner-logo:hover {
  transform: scale(1.25);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}


@media (max-width: 900px) {
  .outer-box {
    width: 90%;
    height: 160px;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
  }
}


@media (max-width: 600px) {
  .outer-box {
    width: 95%;
    height: 110px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    padding-left: 0.5rem;
  }
}
</style> -->








<template>
  <v-card flat class="w-100 mx-auto mt-4" max-width="900" style="background: transparent;">
    <!-- <div class="outer-box">
      <div class="inner-logo"></div>
    </div> -->

    <v-row class="h-auto ga-3" align="stretch">
      <v-col class="h-100 pa-4" cols="12" style="background: transparent">
        <v-card flat class="h-100 rounded-xl" style="background: transparent">
          <!-- <v-card-title class="text-center text-white py-8">متن آهنگ های کنسرت  2 آبان</v-card-title> -->
          <v-card-text class="mx-4 rounded-xl pa- mb-5" style="background: transparent;">
            <v-row>
              <v-col cols="12">
             
                <!-- <v-expansion-panels v-model="activePanel" accordion>
                  <v-expansion-panel
                    v-for="(track, index) in tracks"
                    :key="index"
                    class="transition-all track-panel"
                    :style="getPanelStyle(index)"
                    @click.stop="openFullscreen(index)"
                  >
                    <v-expansion-panel-title>
                      {{ track.titleFa }}
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                     
                      <div class="lyrics-box">
                        <div v-for="(line, i) in previewLines(track)" :key="i" class="lyric-line-box">
                          {{ line }}
                        </div>
                        <div v-if="previewLines(track).length && previewLines(track).length < formatLyrics(track).length" class="divider">…</div>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels> -->




                <v-expansion-panels v-model="activePanel" accordion>
  <v-expansion-panel
    v-for="(track, index) in tracks"
    :key="index"
    class="track-panel-wrapper"
    @click.stop="openFullscreen(index)"
  >
    <div class="track-panel-inner">
      <v-expansion-panel-title>
        {{ track.titleFa }}
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="lyrics-box">
          <div v-for="(line, i) in previewLines(track)" :key="i" class="lyric-line-box">
            {{ line }}
          </div>
          <div v-if="previewLines(track).length && previewLines(track).length < formatLyrics(track).length" class="divider">…</div>
        </div>
      </v-expansion-panel-text>
    </div>
  </v-expansion-panel>
</v-expansion-panels>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    
    <transition name="fade">
      <div v-if="activeFullIndex !== null" class="fullscreen-overlay" @keydown.esc="closeFullscreen" tabindex="-1" ref="fsOverlay">
        <div class="fullscreen-content">
          <button class="fs-close" @click="closeFullscreen">✕</button>
          <h2 class="fs-title">{{ tracks[activeFullIndex].titleFa }}</h2>

          <div class="fs-lyrics">
            <div v-if="typeof tracks[activeFullIndex].timedLyrics === 'string'">
              <div v-for="(line, i) in tracks[activeFullIndex].timedLyrics.split('…')" :key="i" class="">
                {{ line }}
              </div>
            </div>
            <div v-else>
              <div v-for="(line, i) in tracks[activeFullIndex].timedLyrics" :key="i" class="text-center text-white mt-4" style="
              font-size: 1.1rem;"  :class="{'author-line': line.text.includes('شاعر') || line.text.includes('ترانه') || line.text.includes('آهنگساز') || line.text.includes('خواننده') || line.text.includes('شعر')}">
              <div class="lyrics-text">
                {{ line.text }}
              </div>
                <div v-if="line.text.includes('آهنگساز و خواننده')" class="separator-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </v-card>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

const activePanel = ref(null)
const activeFullIndex = ref(null) 
const fsOverlay = ref(null)

const openFullscreen = async (index) => {
 
  activeFullIndex.value = index
  await nextTick()
 
  fsOverlay.value?.focus()
}

const closeFullscreen = () => {
  activeFullIndex.value = null
  activePanel.value = null
  
}


watch(activeFullIndex, (val) => {
  if (val !== null) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})


onBeforeUnmount(() => {
  document.body.style.overflow = ''
})


const getPanelStyle = (index) => {
  const isActive = activePanel.value === index || activeFullIndex.value === index
  return {
    background: isActive
      ? 'rgba(0, 0, 0, 0.9)'
      : 'rgba(255, 255, 255, 0.06)',
    color: isActive ? 'white' : '#ddd',
    transition: 'all 0.4s ease',
    boxShadow: isActive ? '0 0 20px rgba(255,255,255,0.04)' : 'none',
    borderRadius: '12px',
    transform: isActive ? 'scale(1.01)' : 'scale(1)',
  }
}

const formatLyrics = (lyrics) => {
  if (!lyrics) return [] 

  if (Array.isArray(lyrics)) {
   
    return lyrics.map(l => (typeof l === 'string' ? l : l.text))
  }

  if (typeof lyrics === 'string') {
 
    return lyrics.split(/\r?\n|…/).filter(line => line.trim() !== '')
  }

  return []
}


const previewLines = (track) => {
  const lines = formatLyrics(track.timedLyrics || track.lyrics || '')
  return lines.slice(0, 3)
}
    const tracks = [
    {
        title:'Mano Seda Bezan',
        titleFa:'منو صدا بزن',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
     { time: 16, text: "شاعر : مریم دلشاد" },
     { time: 16, text: "آهنگساز و خواننده: احسان نی زن" },
      { time: 16, text: "من که گفتم زندگیمو به تو بستم" },
      { time: 22, text: "گفتی هستم منو بگو که باورم شد" },
      { time: 30, text: "گفته بودم از غم عشق دل شکستم، گفتی هستم" },
      { time: 39, text: "چرا دوباره باورم شد؟" },
      { time: 44, text: "غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره" },
      { time: 52, text: " عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره" },
      { time: 64, text: "به هر طرف که رو کنم، برمیگردم، مگه خیال تو میذاره" },
     { time: 72, text: "کجا قدم زدی که از هر جا میرم، تورو به یاد من میاره" },
     { time: 80, text: "نفس که میکشم تورو حالم خوبه، هوای تو ادامه داره" },
     { time: 88, text: "اگه صداتو بشنوم آروم میشم، منو صدا بزن دوباره" },
     { time: 96, text: "منو صدا بزن دوباره" },
     { time: 134, text: "برم، کدوم دردو پیش کی ببارم بگو، کجای دلم تو رو بزارم" },
     { time: 145, text: "که کارم شده گریه کردن عزیزم چه کردی تو با من" },
     { time: 156, text: "به هر طرف که رو کنم برمیگردم، مگه خیال تو میذاره" },
     { time: 164, text: "کجا قدم زدی که از هر جا میرم، تورو به یاد من میاره" },
      { time: 172, text: "نفس که میکشم تورو حالم خوبه، هوای تو ادامه داره" },
     { time: 180, text: "اگه صداتو بشنوم آروم میشم، منو صدا بزن دوباره" },
     { time: 188, text: "منو صدا بزن دوباره" },
    ],
    },
    {
        title:'Nafas',
        titleFa:'نفس',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 0, text: "شاعر : محسن شیرعلی" },
   { time: 0, text: "کاری کردی با دلم، که قد یه دریا شه" },
  { time: 6, text: "قسم آخر این مرد، رنگ چشمات باشه" },
  { time: 12, text: "دست می‌ذارم روی قلبم، اسمت هر جا اومد" },
  { time: 18, text: "چه‌جوری میشه به چشم یه نفر، این‌همه زیبا اومد" },
  { time: 24, text: "مستم کن از عطر موهات، که از همه دل کندم" },
  { time: 30, text: "موهاتو وا کن، چشمای شب رو خودم می‌بندم" },
  { time: 36, text: "من از همه دل کندم" },
  { time: 42, text: "برای زندگی مگه دلیلی بهتر از تو هست" },
  { time: 48, text: "به‌جای اسمت همه‌جا بذار صدات کنم نفس" },
  { time: 48, text: "بذار صدات کنم نفس" },
  { time: 54, text: "وقتی که پیش من میای، دریایی از آرامشم" },
  { time: 60, text: "ساعتو می‌کشم عقب، بیشتر بهت خیره بشم" },
  { time: 66, text: "صدام بزن، صدای تو منو به رویا می‌بره" },
  { time: 72, text: "هرچی به‌جز صدای تو رو قلب من بی‌اثره" },
{ time: 72, text: "مستم كن از عطر موهات كه از همه دل كندم" },
{ time: 72, text: "موهاتو وا كن چشماي شب رو خودم مي بندم " },
{ time: 72, text: "من از همه دل كندم " },
{ time: 42, text: "برای زندگی مگه دلیلی بهتر از تو هست" },
  { time: 48, text: "به‌جای اسمت همه‌جا بذار صدات کنم نفس" },
{ time: 48, text: "بذار صدات کنم نفس" },
]
    },
    {
        title:'Khial',
        titleFa:'خیال',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
    { time: 0, text: "به دریا زدم موج یاری نکرد" },
  { time: 6, text: "منو از خیالت فراری نکرد" },
  { time: 12, text: "به صحرا زدم از غم عشق تو" },
  { time: 18, text: "بیابون با فکر تو کاری نکرد" },
  { time: 24, text: "به صحرا زدم برنگرده دلم" },
  { time: 30, text: "به دریا زدم قصه جذاب شه" },
  { time: 36, text: "تو آتیش و وقتی یخ می‌زنم" },
  { time: 42, text: "برای تو باید دلم آب شه" },
  { time: 42, text: "برای تو باید دلم آب شه" },
  { time: 48, text: "برم سمت دریا، تمامش تویی" },
  { time: 54, text: "برم رو به صحرا، تمامش تویی" },
  { time: 60, text: "کجا از خیالت بذارم برم" },
  { time: 66, text: "یه گوشه کناری نشونم بده" },
  { time: 72, text: "یه راه فراری نشونم بده" },
  { time: 78, text: "دیگه هیچ جایی ندارم برم" },
  { time: 84, text: "خیال تو هم تیر هم سنگره" },
  { time: 90, text: "خیال تو از رود جاری‌تره" },
  { time: 96, text: "نشستم ببینم که این لعنتی" },
  { time: 102, text: "منو در نهایت کجا می‌بره" },
  { time: 108, text: "یه حسی که هم سنگ آرامشه" },
  { time: 114, text: "منو سمت طوفان تو می‌کشه" },
  { time: 120, text: "واسه درک حالم دعا می‌کنم" },
  { time: 126, text: "که هر جای دنیایی طوفان شه" },
    { time: 126, text: "که هر جای دنیایی طوفان شه" },
  { time: 132, text: "برم سمت دریا، تمامش تویی" },
  { time: 138, text: "برم رو به صحرا، تمامش تویی" },
  { time: 144, text: "کجا از خیالت بذارم برم" },
  { time: 150, text: "یه گوشه کناری نشونم بده" },
  { time: 156, text: "یه راه فراری نشونم بده" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
  { time: 132, text: "برم سمت دریا، تمامش تویی" },
  { time: 138, text: "برم رو به صحرا، تمامش تویی" },
  { time: 144, text: "کجا از خیالت بذارم برم" },
  { time: 150, text: "یه گوشه کناری نشونم بده" },
  { time: 156, text: "یه راه فراری نشونم بده" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
  { time: 162, text: "دیگه هیچ جایی ندارم برم" },
]
    },
    {
        title:'Mahtabe Man',
        titleFa:'مهتاب من',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%204%20(320).mp3',
        timedLyrics:[
{ time: 0, text: "شاعر : مریم دلشاد" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 11, text: "در بزن خانه ام امشب تویی مهمانم" },
  { time: 16, text: "من که دیوانه ام امشب تویی مهمانم" },
  { time: 21, text: "آخرین دل که به تو داده دلم میکشدم…" },
  { time: 26, text: "آنچه آمد سر این ساده دلم میکشدم" },
  { time: 31, text: "چه شود اگر غم تو اگر در دلم نماند" },
  { time: 39, text: "ای جان من قربانت دل برده آن چشمانت…" },
  { time: 43, text: "چشمون بی ایمانت زده آتش به جانم" },
  { time: 48, text: "هم با تو جان میگیرم هم در غمت میمیرم" },
  { time: 53, text: "رویای بی تعبیرم تویی جان و جهانم…" },
  { time: 78, text: "مهتاب من خوابیده تا این حسرت هر ساله به یلدا نرسد" },
  { time: 88, text: "لبخند بزن محبوب من تا بغض من از گریه به دریا نرسد" },
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
            { time: 0, text: "شاعر : مریم دلشاد" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 26, text: "تمام قلب من مرا صدا بزن" },
  { time: 32, text: "که این دل شکسته را به گریه می نشانم امشب…" },
  { time: 42, text: "که از تو بخوانم امشب" },
  { time: 55, text: "عزیز جان من غم جهان من تو رفته ای" },
  { time: 61, text: "ولی هنوز تمام تو ادامه داره…" },
  { time: 69, text: "هوایت نمیگذارد" },
  { time: 77, text: "از این فاصله رها کن مرا که داغ جدایی امانم دهد" },
  { time: 86, text: "به دریا اگر رسیدی بگو که آبی بر آتش نشانم دهد…" },
  { time: 95, text: "تو از قلب من گذر می کنی همان لحظه باران به تو میرسد" },
  { time: 104, text: "خیال تو را قدم می زنم تمام خیابان به تو می رسد" },
  { time: 137, text: "تو را در خانه ام می خواهم امشب" },
  { time: 143, text: "سری بر شانه ام میخواهم امشب…" },
  { time: 150, text: "صدایم کن صدایم کن مگر خوابم بگیرد" },
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
            { time: 0, text: "شاعر : روزبه بمانی" },
{ time: 0, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 21, text: "مثل آخرای پاییز رنگ و بوی غم گرفتم" },
  { time: 29, text: "خودمو دست تو دادم تورو از خودم گرفتم…" },
  { time: 36, text: "بعد تو توو بغل کی بغضمو خالی کنم" },
  { time: 44, text: "حال بی تو بودنامو جز خود تو من به کی حالی کنم" },
  { time: 56, text: "قلبم، جونم هم قد این تنها شدن نیست…" },
  { time: 64, text: "هستم، اما این زنده بودن حق من نیست" },
  { time: 71, text: "رفتی، دیدم من دیگه رویایی ندارم" },
  { time: 79, text: "حتی زیر سقف خودم جایی ندارم…" },
  { time: 119, text: "چقدر روزای بعد رفتنت سنگینه" },
  { time: 127, text: "برفه کی بی وقفه داره رو سرم میشینه" },
  { time: 134, text: "صورتم جنگل بارون زده تو پاییزه…" },
  { time: 142, text: "سیل برگامه اگه داره تو خودم میریزه" },
  { time: 153, text: "قلبم، جونم هم قد این تنها شدن نیست…" },
  { time: 160, text: "هستم، اما این زنده بودن حق من نیست" },
  { time: 168, text: "رفتی، دیدم من دیگه رویایی ندارم" },
  { time: 176, text: "حتی زیر سقف خودم جایی ندارم…" },
]
    },
     {
        title:'Mashhor',
        titleFa:'مشهور',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%207%20(320).mp3',
        timedLyrics:[
  { time: 0, text: "نمیشه مثل تورو پیدا کرد" },
  { time: 6, text: "نه میشه حسابی رو تو وا کرد" },
  { time: 12, text: "نمیدونم خودمم موندم با تو باید چیکار کرد" },
  { time: 18, text: "عاشق شدم و سخته از تو بشه فرار کرد" },
  { time: 24, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 30, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 36, text: "من بلد نیستم که از تو دور باشم" },
  { time: 42, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
  { time: 48, text: "خواستن تو که سختی یه جور عادته" },
  { time: 54, text: "راحته هرجا باشم این دل ساده زیر سایته" },
  { time: 60, text: "تو با خونسردی عاشقم کردی" },
  { time: 66, text: "هرجا بری برمی‌گردی" },
  { time: 72, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 78, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 84, text: "من بلد نیستم که از تو دور باشم" },
  { time: 90, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
  { time: 96, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 102, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 108, text: "من بلد نیستم که از تو دور باشم" },
  { time: 114, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
   { time: 72, text: "من که مشهورم به این اینکه مغرورم" },
  { time: 78, text: "چه کردی با قلبم که پیش چشمت انقد بی ارادم" },
  { time: 84, text: "من بلد نیستم که از تو دور باشم" },
  { time: 90, text: "یه جوری میخوامت که خودمو خیلی راحت یاد تو دادم" },
]
    },
    {
        title:'Chi Mishe Goft ',
        titleFa:'چی میشه گفت',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%205%20(320).mp3',
        timedLyrics:[
             { time: 0, text: "شاعر : روزبه بمانی" },
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
        title:'az to neveshtam',
        titleFa:'از تو نوشتم',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%202(320).mp3',
timedLyrics: [
    { time: 0, text: "شاعر : مریم دلشاد" },
    { time: 0, text: "این همه از تو نوشتم این همه ورق سوزوندم" },
  { time: 6, text: "عمرم و برات گذاشتم این همه پای تو موندم" },
  { time: 12, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
  { time: 18, text: "این همه خون به دلم شد حرفم و تو سینه کشتم" },
  { time: 24, text: "از خودم به آینه گفتم زخم تو مونده رو مشتم" },
  { time: 30, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
  { time: 36, text: "اگه دنیا رو میخواستی من بهت نه نمی‌گفتم" },
  { time: 42, text: "منِ تنها رو میخواستی، من بهت نه نمی‌گفتم" },
  { time: 48, text: "چی میخواستی از غرورم که واست کنار نذاشتم" },
  { time: 54, text: "دل دریا رو می‌خواستی، من بهت نه نمی‌گفتم" },
  { time: 60, text: "منو هر طرف کشوندی دور دنیای تو گشتم" },
  { time: 66, text: "عشق و از خطر نترسون من که از خودم گذشتم" },
  { time: 72, text: "حالا ول کنم برم؟ من ازت نمی‌گذرم" },
{ time: 36, text: "اگه دنیا رو میخواستی من بهت نه نمی‌گفتم" },
  { time: 42, text: "منِ تنها رو میخواستی، من بهت نه نمی‌گفتم" },
  { time: 48, text: "چی میخواستی از غرورم که واست کنار نذاشتم" },
  { time: 54, text: "دل دریا رو می‌خواستی، من بهت نه نمی‌گفتم" },
]
    },
    
    
    
    {
        title:'bavar nakardi',
        titleFa:'باور نکردی',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%206%20(320).mp3',
        timedLyrics:[
  { time: 0, text: "دلشوره‌هامو کمتر نکردی" },
  { time: 5, text: "گفتم تمومه باور نکردی" },
  { time: 10, text: "بازم ندیدی چی آرزومه" },
  { time: 15, text: "گفتی تمومه گفتم تمومه" },
  { time: 21, text: "غیر از غرورم چی تو دلت بود" },
  { time: 26, text: "میرم بفهمی کی عاشقت بود" },
  { time: 31, text: "میرم بفهمی با رفتن من آینده‌ی تو زیبا نمیشه" },
  { time: 38, text: "اندازه‌ی من تو کل دنیا دیوونه‌ی تو پیدا نمیشه" },
  { time: 45, text: "میرم که پای دلشوره‌های بی‌وقفه‌ی تو هر شب نشینم" },
  { time: 52, text: "میرم نباشم میرم بمیرم میرم تورو با کسی نبینم" },
  { time: 59, text: "قلب تو قد دنیای من نیست" },
  { time: 64, text: "میرم بفهمی این جای من نیست" },
  { time: 69, text: "دیوونه‌بازیت جز بچگی نیست" },
  { time: 74, text: "این حرص دریا از تشنگی نیست" },
  { time: 79, text: "غیر از غرورم چی تو دلت بود" },
  { time: 84, text: "میرم بفهمی کی عاشقت بود" },
  { time: 89, text: "میرم بفهمی با رفتن من آینده‌ی تو زیبا نمیشه" },
  { time: 96, text: "اندازه‌ی من تو کل دنیا دیوونه‌ی تو پیدا نمیشه" },
  { time: 103, text: "میرم که پای دلشوره‌های بی‌وقفه‌ی تو هر شب نشینم" },
  { time: 110, text: "میرم نباشم میرم بمیرم میرم تورو با کسی نبینم" },
  
]
    },
    
    {
        title:'dard dori',
        titleFa:'درد دوری',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
        { time: 0, text: "شاعر : محسن شیرعلی" },
  { time: 0, text: "من که کل زندگیم جنگیدم" },
  { time: 6, text: "از نگاه سرد تو ترسیدم" },
  { time: 11, text: "گفته بودی که دلت با من نیست" },
  { time: 16, text: "چرا این حرفتو دیر فهمیدم" },
  { time: 22, text: "نمیدونم دیگه چی باید بشه" },
  { time: 27, text: "که بفهمی درد دوریت کم نیست" },
  { time: 32, text: "با من دیوونه کاری کردی" },
  { time: 36, text: "که دیگه قبل تورو یادم نیست" },
  { time: 41, text: "مثل آتیشی شدم سخته که خاموشم کنی" },
  { time: 47, text: "من کسی نیستم که راحت بخوای فراموشم کنی" },
  { time: 53, text: "منو از چیزی نترسون وقتی تنها موندم" },
  { time: 59, text: "من همیشه فکر میکردم که تو برمیگردی" },
  { time: 65, text: "یه روزی که جای من بودی خودت میفهمی" },
  { time: 70, text: "که چرا با اینکه رفتی هنوز اینجا موندم" },
  { time: 76, text: "کار من نیست اینکه میگن تورو نادیده بگیرم" },
  { time: 81, text: "اینا که نمیدونن چرا واست میمیرم" },
  { time: 86, text: "برگرد باید کاری کنی برام" },
  { time: 91, text: "دست من نیست اینکه تورو نخوام" },
  { time: 96, text: "مثل آتیشی شدم سخته که خاموشم کنی" },
  { time: 102, text: "من کسی نیستم که راحت بخوای فراموشم کنی" },
  { time: 108, text: "منو از چیزی نترسون وقتی تنها موندم" },
  { time: 114, text: "من همیشه فکر میکردم که تو برمیگردی" },
  { time: 120, text: "یه روزی که جای من بودی خودت میفهمی" },
  { time: 125, text: "که چرا با اینکه رفتی هنوز اینجا موندم" },
]
    },
    {
        title:'Bebin Haleto',
        titleFa:'ببین حالتو',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%2010%20(320).mp3',
        timedLyrics:[
            { time: 16, text: "شاعر : احمد خلیلی" },
             { time: 16, text: "آهنگساز و خواننده : احسان نی زن" },
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
        title:'Dastamo Begir',
        titleFa:'دستمو بگیر',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
  { time: 26, text: "من مثل اون قایقم که دل به زیبایی تو داده" },
  { time: 35, text: "واسه من موهات دریای آزاده…" },
  { time: 42, text: "از چی میترسی عزیزم من که قلبمو بهت دادم" },
  { time: 52, text: "مگه جز قلبش چی داره یه آدم" },
  { time: 60, text: "بزن بزن دل منو دلی که میمیره برات…" },
  { time: 67, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 74, text: "بزن بزن دل منو صیاد عاشق کش من" },
  { time: 83, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
  { time: 110, text: "تمام دنیامو میدم واسه ی لحظه نگات" },
  { time: 117, text: "خودت میدونی از کل دنیا منم که میمونم برات" },
  { time: 124, text: "ی جوری دستمو بگیر که حست از یادم نره…" },
  { time: 131, text: "جوری نگام کن جوری بخند که انگاری بار آخره" },
   { time: 131, text: "انگاری بار آخره" },
  { time: 143, text: "بزن بزن دل منو دلی که میمیره برات…" },
  { time: 150, text: "شکار کن شکار کن قلب منو با خنده هات" },
  { time: 158, text: "بزن بزن دل منو صیاد عاشق کش من" },
  { time: 166, text: "من حاضرم یه کاری کن تیر خلاصتو بزن…" },
]
    },
    {
        title:'halamo ki dare',
        titleFa:'حالمو کی داره',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%209%20(320).mp3',
        timedLyrics:[
          { time: 17, text: " شاعر : احمد امیر خلیلی" },
{ time: 16, text: "آهنگساز و خواننده : احسان نی زن" },
  { time: 0, text: "من و شب و بارون، تو و من" },
  { time: 5, text: "حالمو کی داره" },
  { time: 9, text: "قد یه نگا عاشقت شدن" },
  { time: 13, text: "حالمو کی داره" },
  { time: 17, text: "تو که همه دنیامی، خودِ چشمامی" },
  { time: 22, text: "دوباره، نشستی، تو قلبم، بگو حالمو کی داره؟" },
  { time: 29, text: "از من، بهتر، کی می‌تونه عاشق بشه" },
  { time: 34, text: "عمرم، جونم، چشای تو عاشق‌کُشه" },
  { time: 39, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 44, text: "از تو، بهتر، کی توو دل من خونه کرد" },
  { time: 49, text: "عشقم، قلبم، دلمو کی دیوونه کرد" },
  { time: 54, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 59, text: "وقتی که می‌خندی" },
  { time: 63, text: "کار من تمومه" },
  { time: 67, text: "توو چشام ببین عاشقت شدم کیه که ندونه" },
  { time: 73, text: "حال هردومونه" },
  { time: 77, text: "عشقه یا جنونه" },
  { time: 81, text: "مث من واست مگه کسی هست اینقده دیوونه" },
  { time: 29, text: "از من، بهتر، کی می‌تونه عاشق بشه" },
  { time: 34, text: "عمرم، جونم، چشای تو عاشق‌کُشه" },
  { time: 39, text: "آخه توو نگات چی داری که دلم رفت" },
  { time: 44, text: "از تو، بهتر، کی توو دل من خونه کرد" },
  { time: 49, text: "عشقم، قلبم، دلمو کی دیوونه کرد" },
  { time: 54, text: "آخه توو نگات چی داری که دلم رفت" },
]
    }
    ]
</script>

<style>

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


.outer-box {
  margin: auto;
  margin-top: 10rem;
  max-width: 90vw;
  width: 800px;
  height: 200px;
  border: 1px solid white;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  transition: all 0.3s ease;
}

.inner-logo {
  width: clamp(100px, 25%, 180px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid white;
  background-image: url('/imgs/logo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* افکت hover زیبا */
.inner-logo:hover {
  transform: scale(1.25);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

/* تبلت */
@media (max-width: 900px) {
  .outer-box {
    width: 90%;
    height: 160px;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
  }
}

/* موبایل */
@media (max-width: 600px) {
  .outer-box {
    width: 95%;
    height: 110px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    padding-left: 0.5rem;
  }
}





.fullscreen-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 10, 12, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none; /* برای اینکه بتونیم focus کنیم */
}

.fullscreen-content {
  max-width: 1100px;
  width: 100%;
  background: linear-gradient(180deg, rgba(30,30,30,0.98), rgba(18,18,18,0.98));
  border-radius: 12px;
  padding: 36px;
  position: relative;
  box-shadow: 0 10px 60px rgba(0,0,0,0.6);
}

.fs-close {
  position: absolute;
  right: 18px;
  top: 18px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
}

.fs-title {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}


.fs-lyrics {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 70vh;
  overflow: auto;
  padding-right: 8px;
}

.fs-lyrics::-webkit-scrollbar {
  display: none; /* برای Chrome, Safari و Opera */
}
.lyric-line-box {
  display: inline-block;
  padding: 8px 16px;
  margin: 6px 0;
  color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.02);
}


.divider {
  color: #ff00d4f5;
  font-weight: bold;
  opacity: 0.8;
  letter-spacing: 2px;
  margin: 10px 0;
  text-shadow: 0 0 8px rgb(255, 196, 0);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.author-line {
  font-weight: 900;
}
.separator-line {
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0.8rem 0; /* فاصله بالا و پایین */
  width: 100%;
}
.lyrics-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
  line-height: 1.5;
}



.track-panel-wrapper {
  margin-bottom: 12px;
}

.track-panel-inner {
  border-radius: 12px;
  overflow: hidden;
  color: white;
  background-color: #353535; /* رنگ پس‌زمینه دلخواه */
  transition: all 0.3s ease;
}

/* حذف پس‌زمینه سفید پیش‌فرض v-expansion-panel */
.v-expansion-panel {
  background-color: transparent !important;
}

/* حذف پس‌زمینه سفید داخلی هنگام باز شدن */
.v-expansion-panel-content {
  background-color: transparent !important;
}






</style> 