$(function() {
    // 填写表格
    var data = [];
    var len = 10;
    for (var i = 0; i < len; i++) {
        data.push({
            id: 'id_' + i,
            sort: i,
            text: '名称' + i,
            radar_code: 'radar_code',
            remark: 'remark',

        })
    }
    var $table = $('#sortable');
    var str = '';
    console.log(data);
    $(data).each(function(index, item) {
        str += `
    <tr class="item" aid="${item.id}" id="${item.id}" sort="${item.sort}">
        <td>${item.sort}</td>
        <td>${item.text}</td>
        <td>${item.radar_code}</td>
        <td>${item.remark}</td>
        <td>显示</td>
        <td><button class="btn btn-primary edit" tid="${item.id}">修改</button></td>
    </tr>
        `
    });
    $table.find('tbody').html(str);

    var fixHelper = function(e, ui) {
        //console.log(ui)
        ui.children().each(function() {
            $(this).width($(this).width());  //在拖动时，拖动行的cell（单元格）宽度会发生改变。在这里做了处理就没问题了
        });
        return ui;
    };
    // 排序功能
    $table.find('tbody').sortable({
        cursor: "move",
        helper: fixHelper,                  //调用fixHelper
        axis: "y",
        start: function(e, ui) {
            ui.helper.css({ "background": "#fff" })     //拖动时的行，要用ui.helper
            return ui;
        },
        sort: function(e, ui) {
        },
        stop: function(e, ui) {
        },
    });
    $table.find('tbody').disableSelection();

});
