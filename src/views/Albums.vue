<template>
<v-card flat class="w-100 h-full mx-auto mt-4" max-width="1800" style="background: transparent;">
    <v-row class="h-auto ga-3" align="stretch">
        <v-col class="h-auto pa-4" cols="12" md="" style="background: transparent">
            <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
                <v-card-title class="text-center text-white">آلبوم ها</v-card-title>
                <v-card-text>
                    <v-card class="rounded-lg cursor-pointer" image="/imgs/manosedabezan.jpg" height="100" width="100"></v-card>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100 pa-4" cols="12" md="9" style="background: transparent">
            <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
                <v-card-title class="text-center text-white">آهنگ ها</v-card-title>
                <v-card-text class="mx-4 rounded-xl pa-8 mb-5" style="background: rgba(34,34,34 ,0.5);">
                            <v-row class="">
                                <v-col class="d-flex justify-center" cols="6" md="3" v-for="(track , index) in tracks" :key="index" :sendTrack="track">
                                    <v-card v-on:click="getTrack(index)" width="190" height="190" class="rounded-xl">
                                        <v-img
      height="150px"
      :src="track.cover"
      cover
    ></v-img>
    <v-card-title class="h-100 text-white text-center" style="font-size: 1rem;background: rgba(34,34,34 ,0.5);">
    {{ track.title }}
    </v-card-title>
                                    </v-card>
                                </v-col>
                            </v-row>
                </v-card-text>
            </v-card>
            <v-card class="h-100 rounded-xl mt-4" style="background: rgba(34,34,34 ,0.5);">
                <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
                <v-card-title class="text-center text-white">متن آهنگ</v-card-title>
                <div class="lyrics-box text-white" ref="lyricsBox">
            <div
              v-for="(line, index) in tracks[selectedTrackIndex].timedLyrics"
              :key="index"
              :ref="el => lineRefs[index] = el"
              :class="{ active: currentLine === index }"
            >
              {{ line.text }}
            </div>
          </div>
                <!-- <v-card-text
                v-show="true"
                class="mx-4 mb-5 rounded-xl pa-8 text-justify" style="background: rgba(34,34,34 ,0.5);">
                            
                               <v-expand-transition
                               v-show="true"
                               
                               >
  <v-card-text
  v-html="tracks[selectedTrackIndex].Lyrics"
  max-width="400"
    class="mx-4 rounded-xl pa-8 text-center text-white"
    >
  </v-card-text>
</v-expand-transition>
                </v-card-text> -->
            </v-card>
            </v-card>
            <v-card class="h-100 rounded-xl mt-4" style="background: rgba(34,34,34 ,0.5);">
                <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
                <v-card-title class="text-center text-white">متن آهنگ</v-card-title>
                <v-card-text
                v-show="true"
                class="mx-4 mb-5 rounded-xl pa-8 text-justify" style="background: rgba(34,34,34 ,0.5);">
                            
                               <v-expand-transition
                               v-show="true"
                               
                               >
  <v-card-text
  max-width="400"
    class="mx-4 rounded-xl pa-8 text-center text-white"
    >
    <audio ref="audioPlayer" controls style="width: 100%; margin-top: 1rem;" @timeupdate="updateLyrics">
          <source :src="tracks[selectedTrackIndex].link" type="audio/mpeg">
          مرورگر شما از پخش صوتی پشتیبانی نمی‌کند.
        </audio>
  </v-card-text>
</v-expand-transition>
                </v-card-text>
            </v-card>
            </v-card>
        </v-col>
    </v-row>
</v-card>
</template>

<script setup>
import {ref , watch , nextTick} from 'vue'
const selectedTrackIndex = ref(0);
const audioPlayer = ref(null)
const currentLine = ref(0);
const lineRefs = ref([]) 
function getTrack(index) {
    selectedTrackIndex.value = index;
    console.log(tracks[index]);
}
function updateLyrics() {
  const currentTime = audioPlayer.value.currentTime
  const lyrics = tracks[selectedTrackIndex.value].timedLyrics

  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time && (!lyrics[i + 1] || currentTime < lyrics[i + 1].time)) {
      if (currentLine.value !== i) {
        currentLine.value = i

        // اسکرول اتوماتیک
        nextTick(() => {
          lineRefs.value[i]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'  // وسط صفحه
          })
        })
      }
      break
    }
  }
}
    const tracks = [{
        title:'Mano Seda Bezan',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
        Lyrics:`
<p>من که گفتم زندگیمو به تو بستم<br>گفتی هستم منو بگو که باورم شد</p>
<p class="separator">══════•• ❀ ••══════</p>
<p>گفته بودم از غم عشق دل شکستم گفتی هستم<br>چرا دوباره باورم شد ؟</p>
<p class="separator">══════•• ❀ ••══════</p>
<p>غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره<br>عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره</p>
<p class="separator">══════•• ❀ ••══════</p>
<p>به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره<br>کجا قدم زدی که از هر جا میرم تورو به یاد من میاره<br>نفس که میکشم تورو حالم خوبه هوای تو ادامه داره<br>اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره</p>
<p class="separator">══════•• ❀ ••══════</p>
<p>برم کدوم دردو پیش کی ببارم بگو کجای دلم تو رو بزارم<br>که کارم شده گریه کردن عزیزم چه کردی تو با من</p>
<p class="separator">══════•• ❀ ••══════</p>
<p>به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره<br>کجا قدم زدی که از هر جا میرم تورو به یاد من میاره<br>نفس که میکشم تورو حالم خوبه هوای تو ادامه داره<br>اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره</p>
`,
timedLyrics: [
      { time: 16, text: "من که گفتم زندگیمو به تو بستم" },
      { time: 22, text: "گفتی هستم منو بگو که باورم شد" },
      { time: 30, text: "گفته بودم از غم عشق دل شکستم گفتی هستم" },
      { time: 37, text: "چرا دوباره باورم شد؟" },
      { time: 45, text: "غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره" },
      { time: 50, text: " عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره" },
      { time: 55, text: "به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره" },
     { time: 60, text: "کجا قدم زدی که از هر جا میرم تورو به یاد من میاره" },
     { time: 65, text: "نفس که میکشم تورو حالم خوبه هوای تو ادامه داره" },
     { time: 70, text: "اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره" },
     { time: 75, text: "برم کدوم دردو پیش کی ببارم بگو کجای دلم تو رو بزارم" },
     { time: 80, text: "که کارم شده گریه کردن عزیزم چه کردی تو با من" },
     { time: 85, text: "چرا دوباره باورم شد؟" },
     { time: 90, text: "به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره" },
     { time: 95, text: "کجا قدم زدی که از هر جا میرم تورو به یاد من میاره" },
    ],
    },
    {
        title:'Bebin Haleto',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%202(320).mp3',
        Lyrics:`<p>حرفامو گفتم نگفته نمونه<br>یه ترسی تو چشماته که حال هردومونه…<br>منو با همه تنهاییام تنها گذاشتی<br>تو دست از سر دنیای من برنداشتی</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>یه روزی دلتنگم میشی یادت باشه…<br>چجوری به قلبت میگی ساکت باشه<br>یه چیزی بگو آروم بشم<br>یه روزی دلتنگت میشم یادم میره…<br>همیشه قلبمو به هر کی دادم میره<br>یه چیزی بگو آروم بشم<br>یه کاری کنم تو قلب من آروم بگیری…<br>از این جا به بعد جایی نری<br>ببین حالتو دیوونه تو هر جا که باشی<br>تو دنیای من زیباتری…</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>من که گفتم زندگیمو به تو بستم<br>گفتی هستم منو بگو که باورم شد</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>گفته بودم از غم عشق دل شکستم گفتی هستم<br>چرا دوباره باورم شد ؟</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره<br>عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره<br>کجا قدم زدی که از هر جا میرم تورو به یاد من میاره<br>نفس که میکشم تورو حالم خوبه هوای تو ادامه داره<br>اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>برم کدوم دردو پیش کی ببارم بگو کجای دلم تو رو بزارم<br>که کارم شده گریه کردن عزیزم چه کردی تو با من</p>

<p class="separator">══════•• ❀ ••══════</p>

<p>به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره<br>کجا قدم زدی که از هر جا میرم تورو به یاد من میاره<br>نفس که میکشم تورو حالم خوبه هوای تو ادامه داره<br>اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره</p>
`
    },
    {
        title:'Ghalbe Man',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Mahtabe Man',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Chi Mishe Goft',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Yadete',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Bade To',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Roo Be Roo',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Dastamo Begir',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    },
    {
        title:'Bebin Haleto',
        cover:'/imgs/manosedabezan.jpg',
        link:'',
        Lyrics:''
    }]
    watch(selectedTrackIndex, (newIndex) => {
  if (audioPlayer.value) {
    audioPlayer.value.load()   // فایل جدید رو بارگذاری کن
    audioPlayer.value.play()   // و بلافاصله پخش کن
  }
})
</script>

<style>
.lyrics-box {
  max-height: 300px;
  overflow-y: auto;
  padding: 1rem;
  text-align: center;
  line-height: 2;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  scrollbar-width: none;
  -ms-overflow-style: none
  
}
.lyrics-box::-webkit-scrollbar {
  display: none; 
}
.lyrics-box div {
  opacity: 0.5;
  transition: all 0.3s ease;
}
.lyrics-box div.active {
  color: #ffcc00;
  font-weight: bold;
  opacity: 1;
  transform: scale(1.05);
}
</style>