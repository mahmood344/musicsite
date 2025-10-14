<template>
  <v-card flat class="w-100 mx-auto mt-4" max-width="1800" style="background: transparent;">
    <v-row class="h-auto ga-3" align="stretch">

      <!-- ستون آلبوم ها -->
      <v-col class="h-auto pa-4" cols="12" lg="" style="background: transparent" :class="$vuetify.display.mdAndDown?'d-none':''">
        <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
          <v-card-title class="text-center text-white py-8">آلبوم ها</v-card-title>
          <v-card-text>
            <v-card
  class="rounded-xl mx-auto"
  width="100%"
  max-width="200"
  height="200"
  flat
  style="background: transparent; overflow: hidden;"  
>
  <v-img
    src="/imgs/manosedabezan.jpg"
    cover
    height="100%"
    width="100%"
  ></v-img>
</v-card>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- ستون آهنگ ها -->
      <v-col class="h-100 pa-4" cols="12" lg="6" style="background: transparent">
        <v-card class="h-100 rounded-xl" style="background: rgba(34,34,34 ,0.5);">
          <v-card-title class="text-center text-white py-8">آهنگ ها</v-card-title>
          <v-card-text class="mx-4 rounded-xl pa-8 mb-5" style="background: transparent;">
            <v-row>
              <v-col class="d-flex justify-center" cols="6" sm="4" md="3"
                     v-for="(track , index) in tracks" :key="index">
                      <!-- <v-hover v-slot="{ isHovering, props }"> -->
                <v-card v-on:click="getTrack(index)"
                v-bind="props"
                        :width="$vuetify.display.smAndDown?300:300"
                        :height="$vuetify.display.smAndDown?300:300"
                        class="rounded-xl">
                  <v-img 
                   :height="$vuetify.display.smAndDown?'300':'300px'" :src="track.cover" cover>
                    <v-expand-transition>
            <div
              class="d-flex v-card--reveal"
              style="height: 100%;background: rgba(34,34,34 ,0.5);color: white;font-size: 1.1rem;"
            >
             {{ track.titleFa }}
            </div>
          </v-expand-transition>
                  </v-img>
                </v-card>
                <!-- </v-hover> -->
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- دکمه نمایش پلیر پایین -->
       

        <!-- کارت وسط با پلیر -->
<v-dialog
v-if="$vuetify.display.mdAndDown"
  v-model="show"
  fullscreen
  hide-overlay
  persistent
  transition="slide-up-fullscreen"
>
  <!-- کل صفحه -->
  <v-card
    class="d-flex flex-column align-center justify-start pa-0"
    style="background: rgba(20,20,20,0.9); width: 100vw; height: 100vh; overflow-y: auto;"
  >
    <!-- دکمه بستن -->
    <div class="w-100 text-center py-4">
      <v-btn @click="Bottom" icon="mdi-chevron-down" size="large" color="white" class="control-btn"></v-btn>
    </div>
    <v-divider color="white" class="w-100"></v-divider>
    <!-- محتوا (متن آهنگ + پلیر) -->
    <div class="d-flex flex-column align-center flex-grow-1 px-4 py-6" style="width: 100%;">
      <!-- 🎵 متن آهنگ -->
      <!-- 🎧 پلیر -->
      <v-card
        class="player-card pa-0 mx-auto"
        elevation="0"
        style="background: rgba(34,34,34 ,0.8); border-radius: 25px; width: 90%; max-width: 580px;height: 650px;"
      >
        <v-card
        flat
        class="lyrics-card mb-4 px-4 py-3"
        style="background: rgba(34,34,34 ,0.5); width: 100%; max-width: 600px;height: 320px;"
      >
        <div class="lyrics-box text-white" ref="lyricsBox">
          <div
            v-for="(line, index) in tracks[selectedTrackIndex]?.timedLyrics || []"
            :key="index"
            :ref="el => lineRefs[index] = el"
            :class="{ active: currentLine === index }"
            class="my-1"
          >
            {{ line.text }}
          </div>
        </div>
      </v-card>
        <v-card-text class="text-center pt-5 pb-1">
         <h3 class="font-weight-bold mb-1" style="color:white;"> آهنگ {{ title || 'منو صدا بزن' }}</h3>
          <p class="font-weight-bold my-6" style="color:#666;">آلبوم منو صدا بزن</p>
          <p class="font-weight-bold py-2" style="color:white;font-size: 1.2rem;">{{ formatTime(currentTime) }}</p>
        </v-card-text>
        <div class="px-8 pb-8 text-center" dir="ltr">
           <input
  type="range"
  min="0"
  max="100"
  v-model="progress"
  class="progress-slider"
  @input="onSeek"
/>
          <div class="mt-6 d-flex justify-space-around align-center">
            <button class="control-btn small" @click="prevTrack">
              <v-icon size="small" color="#555">mdi-skip-previous</v-icon>
            </button>
            <button class="control-btn small" @click="togglePlay">
              <v-icon size="small" color="#555">{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </button>
            <button class="control-btn small" @click="nextTrack">
              <v-icon size="small" color="#555">mdi-skip-next</v-icon>
            </button>
          </div>
        </div>
      </v-card>
    </div>
  </v-card>
</v-dialog>
        <!-- کارت پایین فیکس با پلیر -->
        <transition name="bounce">
          <v-card :class="$vuetify.display.lgAndUp?'d-none':''" v-show="showBottom" class="bottom-fixed-card text-center" style="background: transparent;position: relative;">
            <v-card-text class="rounded-xl text-center text-white px-8">
              <div class="custom-player" dir="ltr" style="border-radius: 50px;max-width: 1000px;background: rgba(34,34,34 ,0.8);">
                <button @click="togglePlay" class="player-btn">
                 <v-icon size="small" v-if="!isPlaying">mdi-play</v-icon>
                 <v-icon size="small" v-else>mdi-pause</v-icon>
                </button>
                <span class="time">{{ formatTime(currentTime) }}</span>
                <div class="progress-container" @click="seek($event)">
                  <!-- <div class="progress-bar">
                    <div class="progress" :style="{ width: progress + '%' }"></div>
                  </div> -->
                  <input
  type="range"
  min="0"
  max="100"
  v-model="progress"
  class="progress-slider"
  @input="onSeek"
/>
                </div>
                <span class="time">{{ formatTime(duration) }}</span>
                <button class="player-btn" @click="toggleMute">
                  <v-icon size="small" v-if="!isMuted">mdi-volume-high</v-icon>
                <v-icon size="small" v-else>mdi-volume-off</v-icon>
                </button>
              </div>
            </v-card-text>
            <v-btn class="text-white" icon style="background: rgba(34,34,34 ,0.5);;position: absolute;top: 0;right: 50%;transform: translate(50%,10%);"
                   @click="top">
              <v-icon size="x-large">mdi-chevron-up</v-icon>
            </v-btn>
          </v-card>
        </transition>
        <!-- ستون سوم -->
      </v-col>
      <v-col class="h-auto pa-4" cols="12" lg="" style="background: transparent" :class="$vuetify.display.mdAndDown?'d-none':''">
        <v-card class="rounded-xl h-100 " style="background: rgba(34,34,34 ,0.5); max-width: 100vw; width: 100%;">
          <div class="d-flex flex-column align-center flex-grow-1 px-4 py-6" style="width: 100%;">
      <!-- 🎵 متن آهنگ -->
      <!-- 🎧 پلیر -->
      <v-card
        class="player-card pa-0 mx-auto"
        elevation="0"
        style="background: transparent; border-radius: 25px; width: 90%; max-width: 580px;height: 600px;"
      >
        <v-card
        flat
        class="lyrics-card mb-4 px-4 py-3"
        style="background: transparent; width: 100%; max-width: 600px;height: 320px;"
      >
        <div class="lyrics-box text-white" ref="lyricsBox">
          <div
            v-for="(line, index) in tracks[selectedTrackIndex]?.timedLyrics || []"
            :key="index"
            :ref="el => lineRefs[index] = el"
            :class="{ active: currentLine === index }"
            class="my-1"
          >
            {{ line.text }}
          </div>
        </div>
      </v-card>
        <v-card-text class="text-center pt-5 pb-1">
          <h3 class="font-weight-bold mb-1" style="color:white;"> آهنگ {{ title || 'منو صدا بزن' }}</h3>
          <p class="font-weight-bold my-2" style="color:#666;">آلبوم منو صدا بزن</p>
                    <p class="font-weight-bold py-2" style="color:white;font-size: 1.2rem;">{{ formatTime(currentTime) }}</p>

        </v-card-text>
        <div class="px-8 pb-8 text-center" dir="ltr">
           <input
  type="range"
  min="0"
  max="100"
  v-model="progress"
  class="progress-slider"
  @input="onSeek"
/>
          <div class="mt-6 d-flex justify-space-around align-center">
            <button class="control-btn small" @click="prevTrack">
              <v-icon size="small" color="#555">mdi-skip-previous</v-icon>
            </button>
            <button class="control-btn small" @click="togglePlay">
              <v-icon size="small" color="#555">{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </button>
            <button class="control-btn small" @click="nextTrack">
              <v-icon size="small" color="#555">mdi-skip-next</v-icon>
            </button>
          </div>
        </div>
      </v-card>
    </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- پلیر واقعی همیشه در DOM -->
    <audio ref="audioPlayer"
           preload="metadata"
           @timeupdate="onTimeUpdate"
           @loadedmetadata="onLoaded"
           @ended="onEnded"></audio>
  </v-card>
</template>

<script setup>
import {ref , watch , nextTick , onMounted } from 'vue'
const isPlaying = ref(false);
const showBottom = ref(false);
const title = ref(''); 
const show = ref(false)
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const progress = ref(0);
const selectedTrackIndex = ref(0);
const audioPlayer = ref(null)
const currentLine = ref(0);
const lineRefs = ref([]) 
const lyricsBox = ref(null); 
onMounted(() => {
  const firstTrack = tracks[0];
  selectedTrackIndex.value = 0;
  title.value = firstTrack.titleFa;

  const audio = audioPlayer.value;
  audio.src = firstTrack.link;

  // وقتی فایل آماده شد
  audio.onloadedmetadata = () => {
    currentTime.value = 0;
    progress.value = 0;
  }

  audio.load();
});
const cardStyle = ref({ background: 'rgba(34,34,34,0.5)', position: 'relative' });
function Bottom(){
  showBottom.value = true;
  show.value = false;
}
function top(){
  showBottom.value = false;
  show.value = true;
}
function togglePlay() {
  const audio = audioPlayer.value;
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    isPlaying.value = true;
  } else {
    audio.pause();
    isPlaying.value = false;
  }
}
function prevTrack() {
  if (selectedTrackIndex.value > 0) {
    selectedTrackIndex.value--;
  } else {
    // اگر اولین آهنگ است، می‌توان به آخرین برگردد
    selectedTrackIndex.value = tracks.length - 1;
  }
  const track = tracks[selectedTrackIndex.value];
  title.value = track.titleFa;
  currentLine.value = 0;
}

function nextTrack() {
  if (selectedTrackIndex.value < tracks.length - 1) {
    selectedTrackIndex.value++;
  } else {
    // اگر آخرین آهنگ است، می‌توان به اول برگردد
    selectedTrackIndex.value = 0;
  }
   const track = tracks[selectedTrackIndex.value];
  title.value = track.titleFa;
  currentLine.value = 0;
}

function onTimeUpdate() {
    updateLyrics()
  const audio = audioPlayer.value;
  currentTime.value = audio.currentTime;
  progress.value = (audio.currentTime / audio.duration) * 100;
}

function onLoaded() {
  duration.value = audioPlayer.value.duration;
}

function onEnded() {
  isPlaying.value = false;
  progress.value = 0;
  currentTime.value = 0;
}

function toggleMute() {
  const audio = audioPlayer.value;
  isMuted.value = !isMuted.value;
  audio.muted = isMuted.value;
}

function seek(event) {
  const audio = audioPlayer.value;
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percent = clickX / rect.width;
  const newTime = percent * audio.duration;
  audio.currentTime = newTime;
  currentTime.value = newTime;
  progress.value = percent * 100;
}
function onSeek() {
  const audio = audioPlayer.value;
  if (!audio) return;

  const newTime = (progress.value / 100) * audio.duration;
  audio.currentTime = newTime;
  currentTime.value = newTime;
}
function formatTime(sec) {
  if (!sec) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

async function getTrack(index) {
  show.value = !show.value;
  showBottom.value = false;
  title.value = tracks[index].titleFa;
  selectedTrackIndex.value = index;
  currentLine.value = 0;

  const audio = audioPlayer.value;
  audio.pause();
  audio.currentTime = 0;
  audio.src = tracks[index].link;
  audio.load();

  await nextTick();

  // 🟢 فقط متن شعر بیاد بالا
  if (lyricsBox.value) {
    lyricsBox.value.scrollTop = 0;
  }
  if (window.innerWidth < 768) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  // 🎵 شروع پخش
  audio.play();
  isPlaying.value = true;
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
        titleFa:'منو صدا بزن',
        cover:'/imgs/manosedabezan.jpg',
        link:'https://irsv.upmusics.com/dlw/Ehsan%20Neyzan%20-%20Mano%20Seda%20Bezan%201%20(320).mp3',
timedLyrics: [
      { time: 16, text: "من که گفتم زندگیمو به تو بستم" },
      { time: 22, text: "گفتی هستم منو بگو که باورم شد" },
      { time: 30, text: "گفته بودم از غم عشق دل شکستم گفتی هستم" },
      { time: 39, text: "چرا دوباره باورم شد؟" },
      { time: 44, text: "غمی که از تو رو قلب من هست یه زخمیه که تا ابد دوا نداره" },
      { time: 52, text: " عذاب این عشق تموم نمیشه که میکشه ولی غمش صدا نداره" },
      { time: 64, text: "به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره" },
     { time: 72, text: "کجا قدم زدی که از هر جا میرم تورو به یاد من میاره" },
     { time: 80, text: "نفس که میکشم تورو حالم خوبه هوای تو ادامه داره" },
     { time: 88, text: "اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره" },
     { time: 96, text: "منو صدا بزن دوباره" },
     { time: 134, text: "برم کدوم دردو پیش کی ببارم بگو کجای دلم تو رو بزارم" },
     { time: 145, text: "که کارم شده گریه کردن عزیزم چه کردی تو با من" },
     { time: 156, text: "به هر طرف که رو کنم برمیگردم مگه خیال تو میذاره" },
     { time: 164, text: "کجا قدم زدی که از هر جا میرم تورو به یاد من میاره" },
      { time: 172, text: "نفس که میکشم تورو حالم خوبه هوای تو ادامه داره" },
     { time: 180, text: "اگه صداتو بشنوم آروم میشم منو صدا بزن دوباره" },
     { time: 188, text: "منو صدا بزن دوباره" },
    ],
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
    watch(selectedTrackIndex, (newIndex) => {
  const audio = audioPlayer.value;
  if (!audio) return;

  audio.pause();           // پخش قبلی رو متوقف کن
  audio.currentTime = 0;   // زمان قبلی رو صفر کن
  audio.src = tracks[newIndex].link;
  audio.load();            // فایل جدید رو لود کن

  // وقتی متادیتا لود شد، پخش کن
  audio.onloadedmetadata = () => {
    audio.play().catch(err => {
      if (err.name === "AbortError") {
        console.log("پخش قبل از آماده شدن لغو شد، دوباره تلاش میکنیم…");
      }
    });
    isPlaying.value = true;
  };
});
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


.custom-player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(145deg, #111, #222);
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  color: #fff;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  user-select: none;
}

.player-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.player-btn:hover {
  transform: scale(1.2);
  color: #ff0055;
}

.time {
  font-family: monospace;
  font-size: 14px;
  width: 45px;
  text-align: center;
}

.progress-container {
  flex: 1;
  height: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.progress-bar {
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #ff0055, #8f00ff);
  transition: width 0.1s linear;
}
.custom-player {
  width: 100%;            
  padding: 15px 25px;     
}

.progress-container {
  height: 14px;            
}

.player-btn {
  font-size: 25px;       
}



.center-card {
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-fixed-card {
  position: fixed !important;
  bottom: -90px;
  left: 0;
  width: 100%;
  
  height: 200px; /* ارتفاع دلخواه */
  /* background: rgba(34, 34, 34, 0.5);
  color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  z-index: 9999;
}

/* افکت‌های ترنزیشن */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.slide-up-fullscreen-enter-active {
  animation: slide-up 0.5s ease forwards;
}
.slide-up-fullscreen-leave-active {
  animation: slide-down 0.5s ease forwards;
}

@keyframes slide-up {
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slide-down {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
.player-card {
  box-shadow:
    10px 10px 20px #cfd5db,
    -10px -10px 20px #ffffff;
}

.progress-slider {
  width: 100%;
  height: 4px;
  appearance: none;
  background: #dfe3e8;
  border-radius: 5px;
  outline: none;
}
.progress-slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  cursor: pointer;
}

.control-btn {
  border: none;
  border-radius: 50%;
  background: #f2f5f9;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
/* .control-btn:hover{
  box-shadow:
    6px 6px 12px #cfd5db,
    -6px -6px 12px #ffffff;
} */
.control-btn.small {
  width: 55px;
  height: 55px;
}
.control-btn.large {
  width: 90px;
  height: 90px;
}
.control-btn:active {
  box-shadow:
    inset 6px 6px 12px #cfd5db,
    inset -6px -6px 12px #ffffff;
}

.lyrics-box {
  max-height: 250px;
  overflow-y: auto;
}
.active {
  color: #00e676;
  font-weight: bold;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
  
</style>