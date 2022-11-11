<template>
  <div>
          <h3>Сделанные работы (1)</h3>
		  <div class="card">
            <h5>Архив всех заказов за текущий период</h5>
            <TreeTable :value="nodes" responsiveLayout="scroll">
                <Column field="name" header="Название, исполнитель" :expander="true" style="min-width:200px"></Column>
                <Column field="price" header="Стоимость" style="min-width:100px"></Column>
                <Column field="status" header="Статус" style="min-width:100px"></Column>
                <Column field="action" header="Действие" style="min-width:100px">
				  <template #body>
				    button
				  </template>
				</Column>				
            </TreeTable>
          </div>
          <h3>Сделанные работы (2)</h3>		  
          <div class="grid">
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-cog text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
					<div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-cog text-orange-500 text-xl"></i>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-cog text-orange-500 text-xl"></i>
                    </div>	
                    </div>					
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
    </div>		
  </div>
</template>
<script async setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import NodeService from '~/service/NodeService'

const nodes = ref()
const nodeService = ref(new NodeService())

onMounted(() => {
 nodeService.value.getTreeTableNodes().then(data => nodes.value = data)
})
</script>
<style scoped>
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</style>
<route lang="yaml">
meta:
  layout: default
</route>