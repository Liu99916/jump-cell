<script setup lang="ts">

</script>

<template>
  <main>
    <div class="cell">
      <div class="content flex-1 circle">
        <span>天</span>
      </div>
    </div>
    <div class="cell">
      <div class="content flex-1">
        <span>7</span>
      </div>
      <div class="content flex-1">
        <span>8</span>
      </div>
    </div>
    <div class="cell">
      <div class="content square">
        <span>6</span>
      </div>
    </div>
    <div class="cell">
      <div class="content flex-1">
        <span>4</span>
      </div>
      <div class="content flex-1">
        <span>5</span>
      </div>
    </div>
    <div class="cell">
      <div class="content square">
        <span>3</span>
      </div>
    </div>
    <div class="cell">
      <div class="content square">
        <span>2</span>
      </div>
    </div>
    <div class="cell">
      <div class="content square">
        <span>1</span>
      </div>
    </div>
    <div class="cell">
      <div class="content flex-1 throw">
        <span>投 掷 区</span>
        <div v-drag id="rock"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background: #fff;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
}

.cell {
  flex: 1;
  display: flex;
  justify-content: center;
}

.content {
  border: 1px solid #fff;
  background: #eee;
  display: inline-block;
}

.square {
  aspect-ratio: 1;
}

.content span {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
}

.flex-1 {
  flex: 1
}

.circle {
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}
.throw {
  background: #fff;
  border: 1rem dotted #eee;
}
#rock {
  border: 1rem solid #aaa;
  border-radius: 100%;
  position: absolute;
}
</style>
