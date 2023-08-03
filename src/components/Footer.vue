<scrpt setup lang="ts"></scrpt>
<template>
  <section class="footer">
    <div class="bg"></div>
    <div class="texts">
      <p class="title">THANKS TO</p>

      <div class="thanks_message">
        <p>
          사랑으로 키워주신 양가 부모님과<br />
          늘 저희를 응원해주시는<br />
          모든 분들께 감사드립니다.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.footer {
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  padding: 80px 0;
  background: url("../assets/image/footer.png") no-repeat center center / cover;
  color: #fff;
  height: 272px;
  position: relative;
}
.footer .title {
  margin-bottom: 10px;
}
.footer .copy {
  font-size: 10px;
  margin-top: 30px;
}

.texts {
  z-index: 2;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 272px;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.bg {
  opacity: 0.2;
  height: 100%;
  background: #333;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>
