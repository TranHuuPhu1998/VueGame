<template>
        <div>
            <div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: block;">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Please enter a name of Course</h4>
                        </div>
                        <div class="modal-body">
                            <input class="w-full form-check-input" ref="input" type="text" v-model="name" name="name" placeholder="name of course">
                            <input class="w-full form-check-input" ref="input" type="text" v-model="type" name="type" placeholder="type of course">
                            <input class="w-full form-check-input" ref="input" type="textarea" v-model="description" name="name" placeholder="description of course">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="onSaveClose">Save changes</button>
                            <button type="button" class="btn btn-primary" @click="onCancel">onCancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade in"></div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                description : '',
                type : ''
            }
        },
        methods: {
            focusInput() {
                this.$refs.input.focus()
            },
            onSaveClose(){
                let course = {
                    name : this.name,
                    description : this.description,
                    type : this.type
                }
                this.$emit('SaveClose',course)
            },
            onCancel(){
                this.$emit('onCancel')
            }
            
        },
        mounted() {
            this.focusInput()
        }
    }
</script>

<style lang="css" scoped>
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.fade.in {
    opacity: 1;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.w-full {
    width: 100%;
}
.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
.modal-backdrop.fade {
    opacity: 0.9;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    -o-transition: -o-transform .3s ease-out;
    transition: transform .3s ease-out;
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
    box-shadow: 0 3px 9px rgb(0 0 0 / 50%);
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.modal-body input {
    border: none;
    border-bottom: 1px solid #cccccc;
    height: 50px;
}
.modal-title {
    color: blueviolet;
}
@media (min-width: 768px)
{
    .modal {
    text-align: center;
    }
    .modal .modal-dialog {
    text-align: left;
    margin: 10px auto;
    display: inline-block;
    vertical-align: middle;
    top:25%;
    }
    .modal-dialog {
    width: 600px;
    margin: 30px auto;
    }
    .modal-content {
    -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    }
}
@media screen and (max-width:767px) {
    .modal-content {
        text-align: left;
    }
}
</style>