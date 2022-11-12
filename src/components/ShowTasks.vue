<template>
  <div>
          <h3>Мои заказы</h3>
		  <!--div class="card">
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
          </div-->
    <div class="grid panel-demo">		  
      <div class="col-7 md:col-7">		  
          <div class="grid">
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Реферат - Судебное право в России 13 века</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-cog text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">4 новых </span>
                <span class="text-500">сообщений</span>
            </div>
        </div>
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Рассказ - как я провёл лето в клубе</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
					<div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-cog text-orange-500 text-xl"></i>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-send text-blue-500 text-xl"></i>
                    </div>	
                    </div>					
                </div>
                <span class="text-green-500 font-medium">0 новых</span>
                <span class="text-500">сообщений</span>
            </div>
        </div>
    </div>
</div>

    <div class="col-5 md:col-5">
	  <div class="card p-fluid">


        <div class="flex align-items-center justify-content-between mb-4">
		  <h5>Чат с преподавателем</h5>
		   <div>
		     <button class="p-button p-component p-button-icon-only p-button-text p-button-plain p-button-rounded" type="button"><!---->
			   <span class="pi pi-ellipsis-v p-button-icon"></span>
			   <span class="p-button-label">&nbsp;</span><!---->
			   <span class="p-ink"></span>
			 </button>
		    </div>
		</div>
		<span class="block text-600 font-medium mb-3">06.11.21</span>
		<ul class="p-0 mx-0 mt-0 mb-4 list-none">
		  <li class="flex align-items-center py-2 border-bottom-1 surface-border">
		    <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
			  <i class="pi pi-dollar text-xl text-blue-500"></i>
			</div>
			<span class="text-900 line-height-3">Иванов И.И. 
			<span class="text-700">Иван, удалось сформулировать задачу
			  <span class="text-blue-500">моё предложение 79$</span>
		    </span>
			</span>
		  </li>
		  <li class="flex align-items-center py-2 border-bottom-1 surface-border">
		    <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
			  <i class="pi pi-question text-xl text-pink-500"></i>
			</div>
			<span class="text-900 line-height-3">Студент
			<span class="text-700">Извините пропустил Ваше сообщение
			  <span class="text-blue-500">не согласен 79$</span>
		    </span>
			</span>
		  </li>	
          <li>
            <div class="col-12 md:col-12">
              <div class="p-inputgroup">
                <Button icon="pi pi-check" class="p-button-success"/>
                  <InputText placeholder="Vote"/>
                  <Button icon="pi pi-times" class="p-button-danger"/>
              </div>
            </div>		  
			</li>		  
      </ul>  

заказчик
автор 
амбассадор

Главное - добавить заказ

Главная 
Мои заказы
Создать заказ
Техподдержка

email, Vk
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