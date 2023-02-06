<script setup>
import { FilterMatchMode } from "primevue/api"
import { ref, onMounted, onBeforeMount } from "vue"
import UserService from "~/service/UserService"
import { useToast } from "primevue/usetoast"
import { useFetch } from "~/composables/fetch"

//import { useLayout } from '@/layout/composables/layout';
//const { contextPath } = useLayout();
const toast = useToast()

const dataMetrix = ref()
const users = ref()
const userDialog = ref(false)
const deleteUserDialog = ref(false)
const deleteUsersDialog = ref(false)
//const user = ref({})
const selectedUsers = ref(null)
const dt = ref(null)
const filters = ref({})
const submitted = ref(false)
const onProfile = ref(false)
const statuses = ref([
  { label: "INSTOCK", value: "instock" },
  { label: "LOWSTOCK", value: "lowstock" },
  { label: "OUTOFSTOCK", value: "outofstock" },
])
const user = reactive({
  id: 0,
  login: null,
  role: null,
  birthday: null,
  fingerprint: null,
  first_name: null,
  last_name: null,
  patronymic: null,
  gender: null,
  email: null,
  password: null,
  balance: 0,
  address: null,
  bank_name: null,
  bank_card: null,
})
//const { data, error }
const { data: result, error } = useFetch({
  url: "https://vm4131020.62ssd.had.wf/api/admin/clients",
  //{ method: "get" }
}) // /metrics
watchEffect(async () => {
  users.value = await result.value?.data
})

//const userService = new UserService()

onBeforeMount(() => {
  initFilters()
})
onMounted(() => {
  //userService.getItems().then((data) => (users.value = data))
})

const showProfile = (data) => {
  user.id = data.id || 0
  user.login = data.login || "rozan"
  user.role = data.role || "мл. модератор (забанен 1ч.)"
  user.birthday = data.bithday || "13.13.22"
  user.first_name = data.first_name || "Иван"
  user.last_name = data.last_name || "Рязанов"
  user.gender = data.gender || "Рязанов"
  user.patronymic = data.patronymic || "Порфирьевич"
  user.phone = data.phone || "+7911"
  user.email = data.email || "rozan@tair.ru"
  user.balance = data.balance || 12
  user.address = data.address || "РФ Баден-Баден"
  user.bank_name = data.bank_name || "Тинькофф"
  user.bank_card = data.bank_card || "****3232"
  user.fingerprint = data.fingerprint || "0000"
  user.password = data.password || "password"
  //
  onProfile.value = !onProfile.value
}

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

const openNew = () => {
  Object.keys(user).map((id) => (user[id] = null))
  console.log("addUser", user.value)
  submitted.value = false
  userDialog.value = true
}

const hideDialog = () => {
  userDialog.value = false
  submitted.value = false
}

const createFingerPrint = async () => {
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitor identifier when you need it.
  await fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      console.log(visitorId)
	  user.fingerprint = visitorId
    })  
}

const saveUser = async () => {
  submitted.value = true
  await createFingerPrint()
  let paramId = `/${user.id}`
  if (!user?.id) {
    user.id = null
	paramId = ''
  }
  console.log('save-user',user)
  const firstName = user.first_name.trim()
  if (firstName && user.login) {
    const { data: saveData, error: saveError } = useFetch({
      url: "https://vm4131020.62ssd.had.wf/api/admin/clients" + paramId, //auth/register
      method: "POST",
      body: JSON.stringify(user),
    })
    //console.log('saveUser',data)
    if (user?.id) {
      //user.value.inventoryStatus = user.value.inventoryStatus.value ? user.value.inventoryStatus.value : user.value.inventoryStatus;
      //users.value[findIndexById(user.value.id)] = user.value;
      toast.add({
        severity: "success",
        summary: "Successful",
        detail: "user Updated",
        life: 3000,
      })
    } else {
      // оставляем - пригодится для загрузки аватарок, иконок
      //user.value.id = createId();
      //user.value.code = createId();
      //user.value.image = 'user-placeholder.svg';
      //user.value.inventoryStatus = user.value.inventoryStatus ? user.value.inventoryStatus.value : 'INSTOCK';
      //users.value.push(user.value);
      toast.add({
        severity: "success",
        summary: "Successful",
        detail: "user Created",
        life: 3000,
      })
    }
    userDialog.value = false
    //user.value = {}
  }
}

const editUser = (userData) => {
  //user.value = { ...userData }

  user.id = userData.id
  user.login = userData.login
  user.role = userData.role
  user.birthday = userData.bithday
  user.first_name = userData.first_name
  user.last_name = userData.last_name
  user.gender = userData.gender
  user.patronymic = userData.patronymic
  user.phone = userData.phone
  user.email = userData.email
  user.balance = userData.balance
  user.address = userData.address
  user.bank_name = userData.bank_name
  user.bank_card = userData.bank_card
  user.fingerprint = userData.fingerprint
  user.password = userData.password

  console.log("editUser", user.value)
  userDialog.value = true
}

const confirmDeleteUser = (editUser) => {
  user.value = editUser
  deleteUserDialog.value = true
}

const deleteUser = () => {
  users.value = users.value.filter((val) => val.id !== user.value.id)
  deleteUserDialog.value = false
  user.value = {}
  toast.add({
    severity: "success",
    summary: "Successful",
    detail: "user Deleted",
    life: 3000,
  })
}

const findIndexById = (id) => {
  let index = -1
  for (let i = 0; i < users.value.length; i++) {
    if (users.value[i].id === id) {
      index = i
      break
    }
  }
  return index
}

const createId = () => {
  let id = ""
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}

const exportCSV = () => {
  dt.value.exportCSV()
}

const confirmDeleteSelected = () => {
  deleteUsersDialog.value = true
}
const deleteSelectedUsers = () => {
  users.value = users.value.filter((val) => !selectedUsers.value.includes(val))
  deleteUsersDialog.value = false
  selectedUsers.value = null
  toast.add({
    severity: "success",
    summary: "Successful",
    detail: "users Deleted",
    life: 3000,
  })
}

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toast />
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button
                label="New"
                icon="pi pi-plus"
                class="p-button-success mr-2"
                @click="openNew"
              />
              <Button
                label="Delete"
                icon="pi pi-trash"
                class="p-button-danger"
                @click="confirmDeleteSelected"
                :disabled="!selectedUsers || !selectedUsers.length"
              />
            </div>
          </template>

          <template v-slot:end>
            <FileUpload
              mode="basic"
              accept="image/*"
              :maxFileSize="1000000"
              label="Import"
              chooseLabel="Import"
              class="mr-2 inline-block"
            />
            <Button
              label="Export"
              icon="pi pi-upload"
              class="p-button-help"
              @click="exportCSV($event)"
            />
          </template>
        </Toolbar>

        <DataTable
          ref="dt"
          :value="users"
          v-model:selection="selectedUsers"
          dataKey="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 25]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
          responsiveLayout="scroll"
        >
          <template #header>
            <div
              class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
            >
              <h5 class="m-0">Таблица пользователей</h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Ищем..."
                />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column field="id" header="Id" :sortable="true" headerStyle="">
            <template #body="slotProps">
              <span class="p-column-title">Id</span>
              {{ slotProps.data.id }}
            </template>
          </Column>
          <Column
            field="login"
            header="Login"
            :sortable="true"
            headerStyle=""
          />		  
          <Column
            field="first_name"
            header="Имя"
            :sortable="true"
            headerStyle=""
          >
            <template #body="slotProps">
              <span class="p-column-title">Имя</span>
              {{ slotProps.data.first_name }}
            </template>
          </Column>
          <Column
            field="last_name"
            header="Фамилия"
            :sortable="true"
            headerStyle=""
          >
            <template #body="slotProps">
              <span class="p-column-title">Фамилия</span>
              {{ slotProps.data.last_name }}
            </template>
          </Column>
          <Column field="gender" header="Пол" :sortable="true" headerStyle="" />
          <Column
            field="email"
            header="Email"
            :sortable="true"
            headerStyle=""
          />
          <Column
            field="phone"
            header="Телефон"
            :sortable="true"
            headerStyle=""
          />
          <Column
            field="country"
            header="Страна"
            :sortable="true"
            headerStyle=""
          />
          <Column field="city" header="Город" :sortable="true" headerStyle="" />
          <Column
            field="currency"
            header="Валюта"
            :sortable="true"
            headerStyle=""
          />
          <Column
            field="bonus"
            header="Бонус"
            :sortable="true"
            headerStyle=""
          />
          <Column
            field="balance"
            header="Депозит"
            :sortable="true"
            headerStyle=""
          />
          <!--Column header="Image" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Image</span>
                            <img :src="'demo/images/user/' + slotProps.data.image" :alt="slotProps.data.image" class="shadow-2" width="100" />
                        </template>
                        <template #body="slotProps">
                            <span class="p-column-title">Price</span>
                            {{ formatCurrency(slotProps.data.price) }}
							<Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
							                            <span :class="'user-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                        </template>						
                    </Column-->

          <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success mr-2"
                @click="editUser(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-warning mt-2"
                @click="confirmDeleteUser(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>

        <Dialog
          v-model:visible="userDialog"
          :style="{ width: '450px' }"
          header="Профиль"
          :modal="true"
          class="p-fluid"
        >
          <img
            :src="'demo/images/user/' + user.image"
            :alt="user.image"
            v-if="user.image"
            width="150"
            class="mt-0 mx-auto mb-5 block shadow-2"
          />
          <div class="formgrid grid">
            <div class="field col-6">
              <label for="name">Login</label>
              <InputText
                id="login"
                v-model.trim="user.login"
                required="true"
                autofocus
                :class="{ 'p-invalid': submitted && !user.login }"
              />
              <small class="p-invalid" v-if="submitted && !user.login"
                >поле *</small
              >
              <label for="name">Имя</label>
              <InputText id="name" v-model.trim="user.first_name" autofocus />
              <label for="name">Отчество</label>
              <InputText id="name" v-model.trim="user.patronymic" autofocus />
              <label for="name">Фамилия</label>
              <InputText id="name" v-model.trim="user.last_name" autofocus />
            </div>
            <div class="field col-6">
              <label for="name">Email</label>
              <InputText id="name" v-model.trim="user.email" autofocus />
              <label for="name">Телефон</label>
              <InputText id="name" v-model.trim="user.phone" autofocus />
              <label for="description">О себе</label>
              <Textarea
                id="description"
                v-model="user.description"
                required="true"
                rows="3"
                cols="20"
              />

              <!--label for="inventoryStatus" class="mb-3">Inventory Status</label>
                        <Dropdown id="inventoryStatus" v-model="user.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
                            <template #value="slotProps">
                                <div v-if="slotProps.value && slotProps.value.value">
                                    <span :class="'user-badge status-' + slotProps.value.value">{{ slotProps.value.label }}</span>
                                </div>
                                <div v-else-if="slotProps.value && !slotProps.value.value">
                                    <span :class="'user-badge status-' + slotProps.value.toLowerCase()">{{ slotProps.value }}</span>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                        </Dropdown-->

              <label class="mb-3">Роль</label>
              <div class="formgrid grid">
                <div class="field col-6">
                  <RadioButton
                    id="category1"
                    name="category"
                    value="Админа"
                    v-model="user.role"
                  />
                  <label for="category1">Админ</label>
                </div>
              </div>
            </div>
          </div>
          <template #footer>
            <Button
              label="Отмена"
              icon="pi pi-times"
              class="p-button-text"
              @click="hideDialog"
            />
            <Button
              label="Отправить"
              icon="pi pi-check"
              class="p-button-text"
              @click="saveUser"
            />
          </template>
        </Dialog>

        <Dialog
          v-model:visible="deleteUserDialog"
          :style="{ width: '450px' }"
          header="Удаление профиля"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i
              class="pi pi-exclamation-triangle mr-3"
              style="font-size: 2rem"
            />
            <span v-if="user"
              >Удалить и поместить в архив? <b>{{ user.login }}</b
              >?</span
            >
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteUserDialog = false"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteUser"
            />
          </template>
        </Dialog>

        <Dialog
          v-model:visible="deleteUsersDialog"
          :style="{ width: '450px' }"
          header="Confirm"
          :modal="true"
        >
          <div class="flex align-items-center justify-content-center">
            <i
              class="pi pi-exclamation-triangle mr-3"
              style="font-size: 2rem"
            />
            <span v-if="user">Удалить и поместить в архив?</span>
          </div>
          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="deleteUsersDialog = false"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              class="p-button-text"
              @click="deleteSelectedUsers"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>

  <!--div class="col-12 xl:col-7">
            <div class="card">
                <h5>Таблица пользователей</h5>
                <DataTable :value="products" :rows="5" :paginator="true" responsiveLayout="scroll">
                    <Column style="" header="Id">
                        <template #body="slotProps">
                          {{ slotProps.data.id }}
                        </template>
                    </Column>
                    <Column field="name" header="Пользователь" :sortable="true" style="width: 45%"></Column>
                    <Column field="price" header="Депозиты" :sortable="true" style="width: 15%">
                        <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.price) }}
                        </template>
                    </Column>
                    <Column header="Действия" style="width: 20%">
                        <template #body="{data}">
                            <Button icon="pi pi-search" type="button" class="p-button-text" @click='showProfile(data)'></Button>
							<Button icon="pi pi-pencil" type="button" class="p-button-text" @click='updateProfile(data)'></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>

        </div-->
</template>
<route lang="yaml">
meta:
  layout: "lite-theme"
</route>
<style scoped lang="scss"></style>
