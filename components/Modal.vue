<template>
  <div class="modal-overlay">
    <div class="modal">
      <slot></slot>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <fas i="times" class="close-img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;

  z-index: 101;
}

.modal {
  text-align: center;

  margin-top: 10%;
}
.close {
  margin: 11% 0 0 16px;
  cursor: pointer;
}

.close-img {
  font-size: 3rem;
  color: $white;
}
</style>
