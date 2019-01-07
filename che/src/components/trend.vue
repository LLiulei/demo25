<template>
    <div class="trend"> 
        <h5>SUV TOP10</h5>
        <div class="trendCon">
            <div class="trendLeft">
                <div id="myChart" :style="{width: '650px', height: '580px'}"></div>
            </div>
            <div class="trendRight">
                <h6>关注指数排行榜</h6>
                <ul>
                    <li>哈弗H6</li>
                    <li>本田CR-V</li>
                    <li>汉兰达</li>
                    <li>途观</li>
                    <li>缤智</li>
                    <li>本田XR-V</li>
                    <li>冠道</li>
                    <li>吉利博越</li>
                    <li>奔驰GLA级</li>
                    <li>全新途胜</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan/18','Feb/18','Mar/18','Apr/18','May/18','Jun/18','Jul/18','Aug/18','Sep/18','Oct/18','Nov/18','Dec/18']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'吉利博越',
                    type:'line',
                    symbol: 'circle', 
                    stack: '总量',
                    data:[48000, 50000, 56000, 57000, 56500, 54000, 53000, 50000, 51000, 49500, 49500, 49800]
                },
                {
                    name:'冠道',
                    type:'line',
                    symbol: 'diamond',
                    stack: '总量',
                    data:[45500, 45300, 44400, 44600, 44700, 46200, 46100, 46700, 47600, 48500, 50600, 50900]
                },
                {
                    name:'本田XR-V',
                    type:'line',
                    symbol: 'rect',
                    stack: '总量',
                    data:[45200, 44100, 44900, 47000, 47800, 50300, 49700,49600,50600,49800,51800,54000]
                },
                {
                    name:'哈弗H6',
                    type:'line',
                    symbol: 'triangle',
                    stack: '总量',
                    data:[154800, 149000, 155100, 157510, 1549800, 137800, 137700,134700,142499,137500,137490,137600]
                },
                {
                    name:'途观',
                    type:'line',
                    symbol: 'triangle',
                    stack: '总量',
                    data:[72000, 79000, 68000, 62000, 63000, 62000, 64500,64590,64585,64400,64500,68500]
                },
                {
                    name:'全新途胜',
                    type:'line',
                    symbol: 'circle', 
                    stack: '总量',
                    data:[43500, 50900, 51200, 44100, 44000, 44600, 44500,43200,41700,42200,44700,45700]
                },
                {
                    name:'本田CR-V',
                    type:'line',
                    symbol: 'diamond',
                    stack: '总量',
                    data:[75200, 65200, 65100, 57501, 54700, 58600, 66700,68000,70100,68100,66650,70100]
                },
                {
                    name:'缤智',
                    type:'line',
                    symbol: 'rect',
                    stack: '总量',
                    data:[80100, 77900, 77400, 79000, 77700, 80100, 82400,81250,82300,82600,60100,57500]
                },
                {
                    name:'奔驰GLA级',
                    type:'line',
                    symbol: 'triangle',
                    stack: '总量',
                    data:[40000, 42010, 42030, 44500, 47800, 50200, 49000,47800,45800,47990,53990,48800]
                },
                {
                    name:'汉兰达',
                    type:'line',
                    symbol: 'triangle',
                    stack: '总量',
                    data:[66100, 64000, 65000, 65400, 67300, 67800, 68800,69700,68600,70400,69990,70050]
                }
            ]
        });
    }
  }
}
</script>
<style lang="scss">
    
</style>