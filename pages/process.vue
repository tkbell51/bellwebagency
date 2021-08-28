<template>
<main>
        <PageHeader :title="'Process'"/>

    <AboutBlock :subtitle="'What is BWA\'s strategy?'" :title="'Process'">
      <p>
        A very specific process is followed from start to finish. This way
        everything is very well organized and communication with the client is
        prioritized.
      </p>
      <div class="flex flex-wrap">
        <div class="w-full">
          <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
            <li class="-mb-px  last:mr-0 flex-auto text-center tab__title" v-for="(item,index) in process" :key="index">
              <a class=" font-bold uppercase px-5 py-3  block leading-normal " @click="toggleTabs(index)" 
                :class="{ 'in-active': openTab !== index, 'active': openTab === index }">
              {{item.title}}
                
              </a>
            </li>
          
          </ul>
          <div class="tab__description relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div class="px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div v-for="(item,index) in process" :key="index" :class="{ hidden: openTab !== index, block: openTab === index }">
                    <p>{{item.description}}</p>
                
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutBlock>
</main>
</template>

<script>
    export default {
          process: [
          {
              title: '1. Preparing',
              description: 'Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Vestibulum suscipit nulla quis orci. Curabitur a felis in nunc fringilla tristique. Nullam sagittis. Praesent blandit laoreet nibh.'
          },
          {
              title: '2. Design',
              description: '2 preparing description'
          },
          {
              title: '3. Development',
              description: '3 preparing description'
          },
          {
              title: '4. Filling Content',
              description: '4 preparing description'
          },
      ],
    }
</script>

<style lang="scss" scoped>

</style>