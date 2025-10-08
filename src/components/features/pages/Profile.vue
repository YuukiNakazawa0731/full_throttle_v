<template>
  <div
    id="profileContainer"
    class="contentsOuter"
    :style="{ backgroundImage: `url(${contentsBack})` }"
  >
    <PostIt>{{ settings.profile.title }}</PostIt>

    <p class="profileTitle">{{ settings.profile.profileTitle }}</p>
    <!--時系列-->
    <div class="profileInnerL">
      <!--写真-->
      <img
        src="@/assets/images/profile/hiyoko.jpg"
        class="profilePhoto"
        alt="chick"
      />
      <img
        src="@/assets/images/contents/line_L.png"
        class="arrowImg"
        alt="lineL"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadA }}</p>
        <span class="profileTxtLine"></span>
        <p class="profileTxtFoot"></p>
      </div>
    </div>

    <div class="profileInnerR">
      <!--写真-->
      <img
        src="@/assets/images/profile/baseball_kids.jpg"
        class="profilePhoto"
        alt="baseballBoy"
      />
      <img
        src="@/assets/images/contents/line_R.png"
        class="arrowImg"
        alt="lineR"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadB }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootB.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerL">
      <!--写真-->
      <img
        src="@/assets/images/profile/guiter_man.jpg"
        class="profilePhoto"
        alt="guitar"
      />
      <img
        src="@/assets/images/contents/line_L.png"
        class="arrowImg"
        alt="lineL"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadC }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootC.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerR">
      <!--写真-->
      <img
        src="@/assets/images/profile/mechanic.jpg"
        class="profilePhoto"
        alt="maintenance"
      />
      <img
        src="@/assets/images/contents/line_R.png"
        class="arrowImg"
        alt="lineR"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadD }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootD.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerL">
      <!--写真-->
      <img
        src="@/assets/images/profile/wedding.png"
        class="profilePhoto"
        alt="marriage"
      />
      <img
        src="@/assets/images/contents/line_L.png"
        class="arrowImg"
        alt="lineL"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadE }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootE.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerR">
      <!--写真-->
      <img
        src="@/assets/images/profile/business.png"
        class="profilePhoto"
        alt="business"
      />
      <img
        src="@/assets/images/contents/line_R.png"
        class="arrowImg"
        alt="lineR"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadF }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootF.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerL">
      <!--写真-->
      <img
        src="@/assets/images/profile/cry_man.jpg"
        class="profilePhoto"
        alt="despair"
      />
      <img
        src="@/assets/images/contents/line_L.png"
        class="arrowImg"
        alt="lineL"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadG }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootG.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>

    <div class="profileInnerR">
      <!--写真-->
      <img
        src="@/assets/images/profile/study.jpg"
        class="profilePhoto"
        alt="coding"
      />
            <img
        src="@/assets/images/contents/line_R.png"
        class="arrowImg"
        alt="lineR"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadH }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootH.replace(/\n/g, '<br>')"
        ></div>
      </div>
    </div>
    
      <div class="profileInnerL">
      <!--写真-->
      <img
        src="@/assets/images/profile/programming.png"
        class="profilePhoto"
        alt="despair"
      />
      <!--テキスト-->
      <div class="profileTxtOuter">
        <p class="profileTxtHead">{{ settings.profile.profileTxtHeadI }}</p>
        <span class="profileTxtLine"></span>
        <div
          class="profileTxtFoot"
          v-html="settings.profile.profileTxtFootI.replace(/\n/g, '<br>')"
        ></div>
      </div>

  </div>
    </div>
</template>

<script setup>
import PostIt from "../../items/PostIt.vue";
import contentsBack from "@/assets/images/contents/contents_back.png";
import settings from "@/assets/data/settings.json";
</script>
