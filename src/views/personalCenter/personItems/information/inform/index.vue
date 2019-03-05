<template>
    <div id="informs">
        <div class="inform" v-for='item in lists'>
            <div class="cons">
                <p>
                    <span class="normal">尊敬的</span>
                    <span>{{item.username}}</span>
                    <span class="normal">点赞了我的文章</span>
                    <span>{{item.title}}</span>
                </p>
            </div>
            <div class="notes">
                <span class="createTime">{{item.createTime}}</span>   
                <span class="date">{{item.date}}</span>   
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#informs{
    input[type='button']:hover{
        cursor: pointer;
    }
    input[type='submit']:hover{
        cursor: pointer;
    }
    .inform{
        padding: 12px 50px 12px 35px;
        border-radius: 5px;
        box-shadow: 0 0 8px #dee1e4;
        margin: 27px 0;
        .cons{
            display:flex;
            align-items: center;
            span{

                font-size: 14px;
                color: #5383b2;
                font-weight: bold;
                img{
                    width:64px;
                    height:64px;
                    box-sizing: border-box;
                    padding: 5px;
                    border-radius: 32px;
                    border:1px solid #dee1e4;
                }
            }
            p{
                padding-left: 18px;
                line-height: 62px;
                text-overflow: ellipsis;
                word-wrap: break-word;
                white-space: nowrap;
                overflow: hidden;
                color: #5383b2;
                .normal{
                    color: #5383b2;
                    font-weight: normal;
                    line-height: 18px;
                    padding: 0 5px;
                }
            }
        }
        .notes{
            text-align: right;
            color:#8c97a1;
            font-size:12px;
            span{
                padding: 0 10px;
            }
        }
    }
}

</style>

<script>
// import $ from 'jquery';
export default {
    name: 'informs',
    data: () => ({
        lists: [
            {
                title: '一个长长的文章名',
                username: '一个长长的用户名',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                date: '18:25:44'
            },
            {
                title: '一个长长的文章名',
                username: '一个长长的用户名名字',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                date: '18:25:44'
            },
            {
                title: '一个长长的文章名',
                username: '一个长长的用户名名字',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                date: '18:25:44'
            },
            {
                title: '一个长长的文章名',
                username: '一个长长的用户名名字',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                date: '18:25:44'
            }
        ]
    }),
    mounted() {
        fetch('http://120.78.51.133:8080/frontdemo/testAdd')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            });

        var url = 'https://www.baidu.com';
        var data = {username: 'example'};

        fetch(url, {
            method: 'POST', // or 'PUT'
            mode: 'no-cors',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => console.log(res.json()))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    },
    methods: {}
};
</script>