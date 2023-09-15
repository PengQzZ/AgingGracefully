  <template>
  <!--展开栏-->
   <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="详情点击" name="0">
        <div>
          无论时代如何发展，产品力永远是市场的排名前列诉求。光年荟·年轻力中心，以高格调、高品位的实景呈现，精心打造未来时尚生活格调，创新式的水街商业中心组成的未来商业体系，各种缤纷商业形态，不仅丰富了人们日常消费的趣味性，还带来了少有的漫步式旅行消费体验。
        </div>
        <div>
          在这里，各种主题商街带给你沉浸式购物体验，潮流热店让生活五彩斑斓，滨河餐厅、音乐酒馆、萌宠乐园、24小时无人超市......无论日常消费、亲朋聚会还是商务洽谈，光年荟都能满足，以足够摩登的生活配套，开创未来全新的生活方式。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    
  console.log(val)
}
</script>

<style>


</style>