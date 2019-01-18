<template>
  <div>
    <x-header class="header"
      @click.native="aa"
      title="个人信息"></x-header>
    <vueCropper ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :fixedBox="option.fixedBox"
      :canMoveBox="option.canMoveBox"
      :centerBox="option.centerBox"></vueCropper>
      <img class="dd" :src="img" />
  </div>
</template>

<script>
import { XHeader, Group, Cell, XInput, XButton } from 'vux'
import { VueCropper } from 'vue-cropper'
export default {
  name: 'extInfo',
  components: {
    VueCropper,
    XHeader,
    Group,
    Cell,
    XInput,
    XButton
  },
  data () {
    return {
      img: '',
      option: {
        img: '//bpic.588ku.com/templet_water_img/18/12/23/672f80c40a85c106b49b7600e035b902.jpg!/fw/800/unsharp/true/compress/true',
        size: 1,
        outputType: 'jpeg',
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true,
        canMoveBox: false,
        centerBox: true
      }
    }
  },
  mounted () {
  },
  methods: {
    aa () {
      this.$refs.cropper.startCrop()
      this.$refs.cropper.getCropData((data) => {
        // do something
        this.img = data
        console.log(data)
      })
      this.$refs.cropper.getCropBlob((data) => {
        // do something
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.animated {
  z-index: 2;
}
.dd {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
