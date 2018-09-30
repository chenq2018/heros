// ajax获取英雄列表
$(function(){
    getAllHeros();

    function getAllHeros(){
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5002/getAllHeros',
            success: function(result){
                // console.log(result); 
                
                // 调用模板方法
                var html = template('temp', {'item': result.data});
                // console.log(html);
                $('#tbodyTable').html(html);
            } 
        })
    }

    $('#btn').on('click', function(){
        $('.ui.modal')
          .modal('show')
        ;
    })

    // 初始化下拉框样式
    $('.ui .dropdown').dropdown()

    // 添加事件
    $('#add').on('click', function(){
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:5002/addHeros',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function(result){
                // console.log(result);
                if(result.status == 200) {
                    getAllHeros();
                }
            }
        });
    })

})