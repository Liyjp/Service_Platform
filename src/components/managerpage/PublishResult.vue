<template>
  <el-form ref="form" :model="form" label-width="80px" style="width: 600px ; max-height: 800px">
    <el-form-item label="成果名">
      <el-input v-model="form.resultname"></el-input>
    </el-form-item>
    <el-form-item label="主创队伍">
      <el-input v-model="form.teamname"></el-input>
    </el-form-item>

    <el-form-item label="成果详情">
      <el-input type="textarea" v-model="form.details" :rows="8"></el-input>
    </el-form-item>

    <el-form-item label="上传图片">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      style="float: left">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
          class="el-upload-list__item-thumbnail"
          :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
      </div>
    </el-upload>
    <el-dialog >
      <img width="100%">
    </el-dialog>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即发布</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: "PublishResult",
      data() {
        return {
          form: {
            resultname: '',
            teamname:'',
            details:'',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
          //数据库操作

          var resultname = this.form.resultname;
          var teamname = this.form.teamname;
          var details = this.form.details;

          this.$http.post('/api/user/addResults', {
            resultname: resultname,
            teamname: teamname,
            details: details,

          },{}).then((response) => {
            console.log(response);
          });

        },

        },
        handleRemove(file) {
          console.log(file);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        handleDownload(file) {
          console.log(file);
        }
    }
</script>

<style scoped>

</style>
