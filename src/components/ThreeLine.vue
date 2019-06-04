<template>
  <div class="page">
    <div class="canvas-warp" ref="threeLine" id="canvas-warp">
    </div>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import * as THREE from 'three';
  import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';


  @Component({
    name: 'ThreeLine'
  })
  export default class ThreeLine extends Vue {
    private dom: HTMLElement;
    private timer: any;
    public width = 500;
    public height = 500;

    public camera: PerspectiveCamera;
    public scene: Scene;
    public renderer: WebGLRenderer;

    public cube: any;
    public light: any;
    public geometry: any;

    apiSize() {
      this.camera.position.x = 0;
      this.camera.position.y = 800;
      this.camera.position.z = -200;
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    }

    /**
     * Three 对象
     */
    private initThree() {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      this.renderer.setSize(this.width, this.height);
      console.log(this.renderer);
      (document.getElementById('canvas-warp') as any).appendChild(this.renderer.domElement);
      this.renderer.setClearColor('#d6e3e9', 1.0);

    }

    /**
     * 相机
     */
    private initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 100);
      this.camera.position.x = 0;
      this.camera.position.y = 1000;
      this.camera.position.z = 0;
      this.camera.up.x = 0;
      this.camera.up.y = 0;
      this.camera.up.z = 1;
      this.camera.lookAt(0, 0, 0);
    }

    private initScene() {
      this.scene = new THREE.Scene();
    }

    private initLight() {
      this.light = new THREE.DirectionalLight('#5257f0', 1.0);
      this.light.position.set(10, 10, 20);
      this.scene.add(this.light);
    }

    /**
     * 模型素材
     */
    private initGeometry() {
      this.geometry = new THREE.Geometry();
      this.geometry.vertices.push(new THREE.Vector3(-500, 0, 0));
      this.geometry.vertices.push(new THREE.Vector3(500, 0, 0));

      for (let i = 0; i <= 20; i++) {

        const line1 = new THREE.Line(this.geometry, new THREE.LineBasicMaterial({
          color: '#219be9',
          opacity: 1
        }));
        line1.position.z = (i * 50) - 50;
        this.scene.add(line1);

        const line2 = new THREE.Line(this.geometry, new THREE.LineBasicMaterial({
          color: '#219be9',
          opacity: 1
        }));
        line2.position.x = (i * 50) - 50;
        line2.rotation.y = 90 * Math.PI / 180;
        this.scene.add(line2);

      }
    }

    private animate() {

    }

    created() {

    }

    mounted() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.dom = (this.$refs.threeLine as HTMLElement);
        this.width = (this.$refs.threeLine as HTMLElement).clientWidth;
        this.height = (this.$refs.threeLine as HTMLElement).clientHeight;
        this.initThree();
        this.initCamera();
        this.initScene();
        this.initLight();
        this.initGeometry();
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
      }, 50);

    }

  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;

    .canvas-warp {
      width: 900px;
      height: 900px;
    }
  }

</style>
