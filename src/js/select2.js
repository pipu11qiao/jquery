console.log('ssssss')
var nowData = [];
var cityData = {
    1: {
        name: '广东省',
        citys: [
            { CITY_ID: "-1", CITY_NAME: "全部" },
            { CITY_ID: "700", CITY_NAME: "西宁市" },
            { CITY_ID: "701", CITY_NAME: "海东" },
            { CITY_ID: "702", CITY_NAME: "格尔木市" },
            { CITY_ID: "704", CITY_NAME: "海西洲" },
            { CITY_ID: "705", CITY_NAME: "海南州" },
            { CITY_ID: "706", CITY_NAME: "海北州" },
            { CITY_ID: "707", CITY_NAME: "黄南州" },
            { CITY_ID: "708", CITY_NAME: "果洛州" },
            { CITY_ID: "709", CITY_NAME: "玉树" },
        ]
    },
    2: {
        name: '广西省',
        citys: [
            { CITY_ID: "-1", CITY_NAME: "全部" },
            { CITY_ID: "800", CITY_NAME: "西宁县" },
            { CITY_ID: "801", CITY_NAME: "海东" },
            { CITY_ID: "802", CITY_NAME: "格尔木县" },
            { CITY_ID: "804", CITY_NAME: "海西县" },
            { CITY_ID: "805", CITY_NAME: "海南县" },
            { CITY_ID: "806", CITY_NAME: "海北县" },
            { CITY_ID: "807", CITY_NAME: "黄南县" },
            { CITY_ID: "808", CITY_NAME: "果洛县" },
            { CITY_ID: "809", CITY_NAME: "玉树" },
        ]
    },
};

$(".city").select2({
    tags: true,
    placeholder: '请选择市',
    multiple: true,
});
//点击添加按钮
$('#add').click(function() {
    $('#tabData').append("<tr>"
        + "<td>"
        + "<select name='PROVINCE_ID[]'  class='short ml5 vmid province' >"
        + "<option value=''>选择省份</option>"
        + "<?php foreach($data as $vo){ ?>"
        + " <option value='{$vo.PROVINCE_ID}'>{$vo.PROVINCE_NAME}</option>"
        + "<?php } ?>"
        + "</select>"
        + "</td>"
        + "<td>"
        + "<select  multiple='multiple' class='short ml5 vmid city'>"
        + "</select>"
        + "<input value='' name='CITY_ID[]' class='cityVal' hidden/>"
        + "</td>"
        + "<td>"
        + "<input type='button' value='删除' class='btn blue submit tabBtn' onclick=\'JsDelete(this)\' />"
        + "</td>"
    );
    $(".city").select2({
        tags: true,
        placeholder: '请选择市',
        multiple: true,
    });
});

// 所属省份 联动市
$("table").on("change", '.province', ChangeProvince);
var getNowData = function(data, type) {
    type = type || 'normal';
    var arr = [];
    if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var obj = {};
            obj.id = data[i].CITY_ID;
            obj.text = data[i].CITY_NAME;
            if (type === 'all') {
                obj.selected = data[i].CITY_ID == -1;
                obj.disabled = data[i].CITY_ID != -1;
            }
            arr.push(obj)
        }
    }
    return arr;
}
function ChangeProvince() {
    console.log(3);
    var that = $(this);
    var province = $(this).find('option:selected').val();
    if (province == '') {
        var city = that.closest('tr').find(".city");
        $(city).select2({
            tags: true,
            placeholder: '请选择市',
            multiple: true,
        });
        return;
    }
    //清空市所选择数据
    var city = that.closest('tr').find(".city");
    $(city).val("").select2({
        placeholder: '请选择市',
    });
    $(city).html('')
    var data = cityData[province].citys;
    nowData = data;
    console.log(province);
    setTimeout(function() {
        var cityDatas = getNowData(nowData);
        var city = that.closest('tr').find(".city");
        console.log(cityDatas);
        /* 生成新数据 */
        $(city).select2({
            tags: true,
            placeholder: '请选择市',
            multiple: true,
            data: cityDatas
        });
    }, 100)
};

//切换市
$("table").on("change", '.city', function(e) {
    var $this = $(this);
    var data = $this.val();
    if ($.inArray("-1", data) != -1) {
        var cityDatas = getNowData(nowData, 'all')
        $this.select2('destroy').html('');
        $this.select2({
            tags: true,
            placeholder: '请选择市',
            multiple: true,
            data: cityDatas
        })
        return;
    }else{
        var cityDatas = getNowData(nowData)
        $(cityDatas).each(function(i,option) {
            if ($.inArray(option.id, data) != -1) {
                option.selected = true;
            }
        })
        $this.select2('destroy').html('');
        $this.select2({
            tags: true,
            placeholder: '请选择市',
            multiple: true,
            data: cityDatas
        })
        return;
    }
    console.log(e)
});
$("table").on("select2:closing", '.city', function(e) {
    var $this = $(this);
    console.log(e)
});

function ChangeCity() {
    var that = $(this);
    var cityVal = '';
    var city = that.closest('tr').find(".cityVal");
    var cityAll = that.closest('tr').find(".city");
    $(this).on("select2:close", function(e) {
    });
};
