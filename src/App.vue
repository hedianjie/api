<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.625
    }
    html, body{
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #333;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }
    img{
        display: block;
        width: 100%;
    }
    
    .color-primary{
        color: #3399ff !important;
    }
    .color-light-primary{
        color: #5cadff !important;
    }
    .color-dark-primary{
        color: #3091f2 !important;
    }
    .color-info{
        color: #3399ff !important;
    }
    .color-success{
        color:#00cc66 !important;
    }
    .color-warning{
        color:#ff9900 !important;
    }
    .color-error{
        color:#ff6600 !important;
    }
    .color-title{
        color: #464c5b !important;
    }
    .color-content{
        color:#657180 !important;
    }
    .color-sub{
        color: #9ea7b4!important;
    }
    .color-disabled{
        color: #c3cbd6 !important;
    }
    

    .col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}
    .text-center{text-align: center;}
    .clear-both{
        overflow: hidden;
        width: 100%;
        height: 0;
        clear: both;
    }
    .v-a-m {
        vertical-align: middle;
    }
    /* .m-l-20{
    margin-left: 20px;
    } */
    .pull-left{
        float: left;
    }
    .pull-right{
        float: right;
    }
    .f-s-0{
	  font-size: 0 !important;
	}
	.f-s-12,
	.f-s-xs{
		font-size: 12px !important;
	}
	.f-s-13{
		font-size: 13px !important;
	}
	.f-s-14,
	.f-s-sm{
		font-size: 14px !important;
	}
	.f-s-16{
		font-size: 16px !important;
	}
	.f-s-18{
		font-size: 18px !important;
	}
	.f-s-20{
		font-size: 20px !important;
	}
	.f-s-22{
		font-size: 22px !important;
	}
	.f-s-24,
	.f-s-lg{
		font-size: 24px !important;
	}
	.f-w-b{
	  font-weight: bold !important;
	}
	.m-l-0{
		margin-left: 0px !important;
	}
	.m-l-5{
		margin-left: 5px !important;
	}
	.m-l-10{
		margin-left: 10px !important;
	}
	.m-l-15{
		margin-left: 15px !important;
	}
	.m-l-20{
		margin-left: 20px !important;
	}
	.m-r-0{
		margin-right: 0px !important;
	}
	.m-r-5{
		margin-right: 5px !important;
	}
	.m-r-10{
		margin-right: 10px !important;
	}
	.m-r-15{
		margin-right: 15px !important;
	}
	.m-r-20{
		margin-right: 20px !important;
	}
	.m-t-0{
		margin-top: 0px !important;
	}
	.m-t-5{
		margin-top: 5px !important;
	}
	.m-t-10{
		margin-top: 10px !important;
	}
	.m-t-15{
		margin-top: 15px !important;
	}
	.m-t-20{
		margin-top: 20px !important;
	}
	.m-b-0{
		margin-bottom: 0px !important;
	}
	.m-b-5{
		margin-bottom: 5px !important;
	}
	.m-b-10{
		margin-bottom: 10px !important;
	}
	.m-b-15{
		margin-bottom: 15px !important;
	}
	.m-b-20{
		margin-bottom: 20px !important;
	}
	
	
	.p-l-0{
		padding-left: 0px !important;
	}
	.p-l-5{
		padding-left: 5px !important;
	}
	.p-l-10{
		padding-left: 10px !important;
	}
	.p-l-15{
		padding-left: 15px !important;
	}
	.p-l-20{
		padding-left: 20px !important;
	}
	.p-r-0{
		padding-right: 0px !important;
	}
	.p-r-5{
		padding-right: 5px !important;
	}
	.p-r-10{
		padding-right: 10px !important;
	}
	.p-r-15{
		padding-right: 15px !important;
	}
	.p-r-20{
		padding-right: 20px !important;
	}
	.p-t-0{
		padding-top: 0px !important;
	}
	.p-t-5{
		padding-top: 5px !important;
	}
	.p-t-10{
		padding-top: 10px !important;
	}
	.p-t-15{
		padding-top: 15px !important;
	}
	.p-t-20{
		padding-top: 20px !important;
	}
	.p-b-0{
		padding-bottom: 0px !important;
	}
	.p-b-5{
		padding-bottom: 5px !important;
	}
	.p-b-10{
		padding-bottom: 10px !important;
	}
	.p-b-15{
		padding-bottom: 15px !important;
	}
	.p-b-20{
		padding-bottom: 20px !important;
	}
</style>
<style>
    .container{
        height: 100%;
    }
    .view-container{
        padding: 10px;
        margin: 10px;
        border: 1px solid #e3e8ee;
        border-radius: 3px;
        background: #fff;
    }
    .view-header{
        padding: 7px;
        border-bottom: 1px solid #e3e8ee;
        display: flex;
        align-items: center;
        line-height: 28px;
        margin-bottom: 10px;
    }
    .view-header .view-title{
        font-size: 16px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		letter-spacing: 1px;
    }

	.form-group{
        min-height: 32px;
        position: relative;
        padding-left: 85px;
        margin-bottom: 15px;
    }
    .form-group .label{
        position: absolute;
        top: 0;
        left: 0;
        line-height: 32px;
        font-size: 13px;
    }
    .form-group .form-control{
        line-height: 32px;
    }
</style>