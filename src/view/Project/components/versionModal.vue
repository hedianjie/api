<template>
    <Modal
        :width="650"
        v-model="modal1"
        title="添加编辑版本内容"
    >
        <Form :label-width="85">
            <FormItem label="">
                <Input />
            </FormItem>
        </Form>
    </Modal>
</template>
<script>
export default {
    data() {
        return {
            modal1: true,
        }
    }
}
</script>

<style>

</style>


