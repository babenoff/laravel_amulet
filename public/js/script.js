/**
 * Created by maksim on 02.10.16.
 */

function dop1() {
    $('.dop_attack').css('display', 'inline');
    $('.dop_defense').css('display', 'none');
    $('.dop_other').css('display', 'none');
}
function dop2() {
    $('.dop_attack').css('display', 'none');
    $('.dop_defense').css('display', 'inline');
    $('.dop_other').css('display', 'none');
}
function dop3() {
    $('.dop_attack').css('display', 'none');
    $('.dop_defense').css('display', 'none');
    $('.dop_other').css('display', 'inline');
}

function block_on() {
    $('#block_changer').css('display', 'inline');
}
function block_off() {
    $('#block_changer').css('display', 'none');
}
function char_ch() {
    if ($('#charaster_png').attr('src') == 'images/wear/arch1.png') {
        $('#charaster_png').attr('src', 'images/wear/ferre1.png');
    }
    else {
        $('#charaster_png').attr('src', 'images/wear/arch1.png')
    }
}

function skill_buff(id_s) {
    var s_values1 = [];
    var s_values2 = [];
    s_values1[1] = [0, 30, 300];
    s_values2[1] = [0, 5, 25];
    s_values1[2] = [0, 30, 40, 50, 60];
    s_values2[2] = [0, 28, 30, 32, 34];
    s_values1[3] = [0, 700, 800, 900, 1000, 1100, 1200, 1300];
    s_values2[3] = false;
    s_values1[4] = [0, 5, 7, 9, 11, 13];
    s_values2[4] = [0, 93, 117, 141, 163, 187];
    s_values1[5] = [0, 9, 11, 13, 15, 17];
    s_values2[5] = false;
    s_values1[6] = [0, 20, 40, 60, 80, 100, 120];
    s_values2[6] = false;
    s_values1[7] = [0, 20, 40];
    s_values2[7] = false;
    s_values1[8] = [0, 15, 20, 25, 30, 35];
    s_values2[8] = false;
    s_values1[9] = [0, 20];
    s_values2[9] = [0, 25];
    s_values1[10] = [0, 500];
    s_values2[10] = false;
    s_values1[11] = [0, 160, 180, 200, 220];
    s_values2[11] = [0, 35, 40, 45, 50];
    s_values1[12] = [0, 463, 880, 1298, 1716, 2133, 2781, 3429, 4077];
    s_values2[12] = false;
    s_values1[13] = [0, 25, 31, 38, 46, 55];
    s_values2[13] = [0, 10, 10, 10, 10, 10];
    s_values1[14] = [0, 5, 10, 15];
    s_values2[14] = false;
    s_values1[15] = [0, 974, 1288, 1602, 2086, 2570];
    s_values2[15] = false;
    s_values1[16] = [0, 25];
    s_values2[16] = false;
    s_values1[17] = [0, 12, 18, 16, 24, 20, 30, 24, 36, 28, 42];
    s_values2[17] = false;
    s_values1[18] = [0, 6, 7, 8, 9, 10];
    s_values2[18] = false;
    s_values1[19] = [0, 960, 1440, 1600, 2400];
    s_values2[19] = false;
    s_values1[20] = [0, 16, 24, 18, 26];
    s_values2[20] = [0, 22, 22, 22, 22];
    s_values1[21] = [0, 50];
    s_values2[21] = false;
    s_values1[22] = [0, 7, 105];
    s_values2[22] = false;
    var s_val = $('select.b_' + id_s + ' :selected').val();

    var num_val_1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    var num_val_2 = ['', 'I', 'I', 'II', 'II', 'III', 'III', 'IV', 'IV', 'V', 'V', 'VI', 'VI'];
    var num_val = ['', num_val_2, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_2, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_1, num_val_2, num_val_1, num_val_2, num_val_2, num_val_1, num_val_2];

    var buff_name = ['', 'Неистовство', 'Адреналин', 'Магический щит', 'Магический круг', 'Дух сокола', 'Стойка лучника', 'Инстинкт выживания', 'Просвещение', 'Спасительный свет', 'Чистое сердце', 'Проворство', 'Второе дыхание', 'Глухая оборона', 'Превосходство духа', 'Жизненная сила', 'Очищение', 'Походный марш', 'Гимн мудрости', 'Гимн земли', 'Рапсодия битвы', 'Разбитые оковы', 'Власть ритма'];

    var skill_buff_val_dop = 0;
    if (s_values1[11][s_val] == 160) {
        skill_buff_val_dop = 5.3;
    }
    if (s_values1[11][s_val] == 180) {
        skill_buff_val_dop = 6;
    }
    if (s_values1[11][s_val] > 180) {
        skill_buff_val_dop = 7.1;
    }

    var buff_deskr = ['', 'Повышает силу атаки в ближнем бою и силу заклинаний на <a style="color:#FF9D3C;">' + s_values1[1][s_val] + '</a> ед., а также скорость бега на <a style="color:#FF9D3C;">' + s_values2[1][s_val] + '</a>%', 'Повышает показатель парирования на <a style="color:#FF9D3C;">' + s_values2[2][s_val] + '</a>% и критический урон в ближнем бою на <a style="color:#FF9D3C;">' + s_values1[2][s_val] + '</a>%.', 'Повышает показатель защиты на <a style="color:#FF9D3C;">' + s_values1[3][s_val] + '</a> ед.', 'Повышает силу заклинаний на <a style="color:#FF9D3C;">' + s_values2[4][s_val] + '</a> ед. и шанс критического урона заклинаниями <a style="color:#FF9D3C;">' + s_values1[4][s_val] + '</a>%.', 'Повышает урон умений дальнего боя на <a style="color:#FF9D3C;">' + s_values1[5][s_val] + '</a>%.', 'Повышает урон атак дальнего боя на <a style="color:#FF9D3C;">' + s_values1[6][s_val] + '</a> ед.', 'Повышается вероятность нанести критический урон в дальнем бою на <a style="color:#FF9D3C;">' + s_values1[7][s_val] + '</a>%.', 'Повышает все основные характеристики на <a style="color:#FF9D3C;">' + s_values1[8][s_val] + '</a> ед.', 'Повышает скорость атаки на <a style="color:#FF9D3C;">' + s_values2[9][s_val] + '</a>% и скорость передвижения на <a style="color:#FF9D3C;">' + s_values1[9][s_val] + '</a>%.', 'Повышает сопротивление заклинателя и всех его союзников на <a style="color:#FF9D3C;">' + s_values1[10][s_val] + '</a> ед.', 'Повышает ловкость на <a style="color:#FF9D3C;">' + s_values1[11][s_val] + '</a> ед., скорость атаки на <a style="color:#FF9D3C;">' + skill_buff_val_dop + '</a>%, а скорость передвижения на <a style="color:#FF9D3C;">' + s_values2[11][s_val] + '</a>%.', 'Увеличивает объем здоровья на <a style="color:#FF9D3C;">' + s_values1[12][s_val] + '</a> ед.', 'Повышает вероятность блокирования на <a style="color:#FF9D3C;">' + s_values1[13][s_val] + '</a>% и снижает скорость передвижения <a style="color:#FF9D3C;">' + s_values2[13][s_val] + '</a>%.', 'Повышает скорость атаки на <a style="color:#FF9D3C;">5</a>%. Суммируется до 3х раз.', 'Увеличивает объем здоровья на <a style="color:#FF9D3C;">' + s_values1[15][s_val] + '</a> ед.', 'Повышает сопротивление заклинаним на <a style="color:#FF9D3C;">' + s_values1[16][s_val] + '</a>%.', 'Повышает скорость передвижения соратников на <a style="color:#FF9D3C;">' + s_values1[17][s_val] + '</a>%.', 'Сокращает время применения умений на <a style="color:#FF9D3C;">' + s_values1[18][s_val] + '</a>%.', 'Повышает защиту и сопротивление заклинаниям соратников на <a style="color:#FF9D3C;">' + s_values1[19][s_val] + '</a> ед.', 'Повышает урон всех соратников на <a style="color:#FF9D3C;">' + s_values1[20][s_val] + '</a>% и скорость атаки на <a style="color:#FF9D3C;">' + s_values2[20][s_val] + '</a>%.', 'Повышает устойчивость к атакам ближнего и дальнего боя на <a style="color:#FF9D3C;">' + s_values1[21][s_val] + '</a>%.', 'Сила заклинаний и эффективность исцеления повышается на <a style="color:#FF9D3C;">7</a> ед. Время восстановления умений специализации «Воодушевление» сокращается на <a style="color:#FF9D3C;">0,4 сек</a>. Эффект может суммироваться до 15 раз.'];
    $('span#b_' + id_s + ' div.buff_description').html(buff_deskr[id_s]);


    if (id_s == 17 || id_s == 18 || id_s == 19 || id_s == 20) {
        if (s_val > 0) {
            if ($('#skill_buff_17_val').val() == 0 && $('#skill_buff_18_val').val() == 0 && $('#skill_buff_19_val').val() == 0 && $('#skill_buff_20_val').val() == 0) {
                $('div#b_22 .i22').removeClass('buff_lock');
                $('select.b_22').removeAttr('disabled');
            }
        }

        if (s_val == 0) {
            if ($('select.b_17 :selected').val() == 0 && $('select.b_18 :selected').val() == 0 && $('select.b_19 :selected').val() == 0 && $('select.b_20 :selected').val() == 0) {
                $('#icon_42').html('');
                $('#skill_buff_22').val(0);
                $('#skill_buff_22_val').val(0);
                $('div#b_22 .i22').addClass('buff_lock  off_img');
                $('select.b_22 [value="0"]').attr('selected', 'selected');
                $('select.b_22').attr('disabled', 'disabled');
            }
        }
        buffset(42);
    }
    if (s_val > 0) {
        if (id_s != 23) {
            if (id_s == 12) {
                if ($('#skill_buff_15').val() > 0) {
                    $('#icon_35').html('');
                    $('#skill_buff_15').val(0);
                    $('#skill_buff_15_val').val(0);
                    $('div#b_15 img.buff_img').addClass('off_img');
                    $('select.b_15 [value="0"]').attr('selected', 'selected');
                }
            }
            if (id_s == 15) {
                if ($('#skill_buff_12').val() > 0) {
                    $('#icon_32').html('');
                    $('#skill_buff_12').val(0);
                    $('#skill_buff_12_val').val(0);
                    $('div#b_12 .i12').addClass('off_img');
                    $('select.b_12 [value="0"]').attr('selected', 'selected');
                }
            }
            if (s_values2[id_s]) {
                $('#skill_buff_' + id_s + '_1').val(s_values1[id_s][s_val]);
                $('#skill_buff_' + id_s + '_2').val(s_values2[id_s][s_val]);
            }
            if (!s_values2[id_s]) {
                $('#skill_buff_' + id_s).val(s_values1[id_s][s_val]);
            }
            $('#skill_buff_' + id_s + '_val').val(s_val);
            $('div#b_' + id_s + ' .buff_img').removeClass('off_img');
            var s_icon = $('span#b_' + id_s + ' img.tooltipimgras').attr('src');

            var total_buff_s = '<div id="x_' + (20 + Number(id_s)) + '" class="tooltip_title"><img src="' + s_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_' + (20 + Number(id_s)) + '" class="tooltip_title"><div style="min-height:40px;"><img src="' + s_icon + '" width="28" style="float: left; padding:5px"><div  style="font-size:13px !important; line-height:1.2; text-align:left; padding:3px !important">Эффект <br />' + buff_name[id_s] + ' ' + num_val[id_s][s_val] + '</div></div><hr style="margin: 0 5 20 5;"><div style="margin-top:-15px; margin-bottom:5px;text-align:left; line-height: 1.3; margin-left:10px; margin-right:10px"><font>' + buff_deskr[id_s] + '</font><br /></div></span></div>';

            $('#icon_' + (20 + Number(id_s))).html(total_buff_s);
        }
    }

    if (s_val == 0) {
        $('div#b_' + id_s + ' .buff_img').addClass('off_img');
        if (s_values2[id_s]) {
            $('#skill_buff_' + id_s + '_1').val(0);
            $('#skill_buff_' + id_s + '_2').val(0);
        }
        if (!s_values2[id_s]) {
            $('#skill_buff_' + id_s).val(0);
        }
        $('#skill_buff_' + id_s + '_val').val(0);
        $('#icon_' + (20 + Number(id_s))).html('');
        $('#skill_buff_' + id_s + '_val').val(0);
    }

    if (id_s == 13) {
        if ($('select.b_23 :selected').val() > 0) {
            var b_23_values = [0, 1240, 1580, 1960, 2380, 2840];
            var b_23_buff = '<div id="x_43" class="tooltip_title"><img src="db/img/items_ico/icon_skill_buff127.png" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_43" class="tooltip_title"><div style="min-height:40px;"><img src="db/img/items_ico/icon_skill_buff127.png" width="28" style="float: left; padding:5px"><div  style="font-size:13px !important; line-height:1.2; text-align:left; padding:3px !important">Эффект <br />Защита от магии</div></div><hr style="margin: 0 5 20 5;"><div style="margin-top:-15px; margin-bottom:5px;text-align:left; line-height: 1.3; margin-left:10px; margin-right:10px"><font>Повышает сопротивление заклинаниям на <a style="color:#FF9D3C;">' + b_23_values[s_val] + '</a> ед.</font><br /></div></span></div>';
            $('#icon_42').html(b_23_buff);
            if (s_val == 0) {
                $('#skill_buff_23').val(0);
                $('#skill_buff_23_val').val(0);
                $('#icon_43').html('');
            }
            if (s_val > 0) {
                $('#skill_buff_23').val(b_23_values[s_val]);
                $('#skill_buff_23_val').val(1);
                $('#icon_43').html(b_23_buff);
            }
            $('span#b_23 div.buff_description').html('Повышает сопротивление заклинаниям на <a style="color:#FF9D3C;">' + b_23_values[s_val] + '</a> ед.');
        }
    }

    if (id_s == 23) {
        if ($('select.b_13 :selected').val() > 0) {
            var c_s_val = $('select.b_13 :selected').val();
            var b_23_values = [0, 1240, 1580, 1960, 2380, 2840];
            var b_23_buff = '<div id="x_43" class="tooltip_title"><img src="db/img/items_ico/icon_skill_buff127.png" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_43" class="tooltip_title"><div style="min-height:40px;"><img src="db/img/items_ico/icon_skill_buff127.png" width="28" style="float: left; padding:5px"><div  style="font-size:13px !important; line-height:1.2; text-align:left; padding:3px !important">Эффект <br />Защита от магии</div></div><hr style="margin: 0 5 20 5;"><div style="margin-top:-15px; margin-bottom:5px;text-align:left; line-height: 1.3; margin-left:10px; margin-right:10px"><font>Повышает сопротивление заклинаниям на <a style="color:#FF9D3C;">' + b_23_values[c_s_val] + '</a> ед.</font><br /></div></span></div>';
            $('#icon_43').html(b_23_buff);
            if (s_val == 0) {
                $('div#b_23 .buff_img').addClass('off_img');
                $('#skill_buff_23').val(0);
                $('#skill_buff_23_val').val(0);
                $('#icon_43').html('');
            }
            if (s_val > 0) {
                $('div#b_23 .buff_img').removeClass('off_img');
                $('#skill_buff_23').val(b_23_values[c_s_val]);
                $('#skill_buff_23_val').val(1);
                $('#icon_43').html(b_23_buff);
            }
            $('span#b_23 div.buff_description').html('Повышает сопротивление заклинаниям на <a style="color:#FF9D3C;">' + b_23_values[c_s_val] + '</a> ед.');
        }
        if (s_val > 0) {
            $('div#b_23 .buff_img').removeClass('off_img');
        }
    }


    Calculate();
    buffset(id_s + 20);
}


function fial_buff(id_f) {
    var this_arr = [0, 1200, 1400, 1255, 15, 15];
    if ($('div#f_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 6; i++) {
            if ($('div#f_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#f_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#fial_' + i).val() > 0) {
                $('#fial_' + i).val(0)
            }
        }
        $('div#f_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#f_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#f_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_9" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_9" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_9').html(total_buff);
        $('#icon_9 div.name_b').addClass('name_s');
        $('#icon_9 div.name_s').removeClass('name_b');
        $('#icon_9 #hidd').removeClass('hidd_b');
        $('#icon_9 #hidd').addClass('hidd_s');
        $('#icon_9 .buff_description_ras').css('color', 'D6D6D6');
        $('#fial_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#f_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#fial_' + i).val() > 0) {
                $('#fial_' + i).val(0)
            }
        }
        $('#icon_9').html('');
    }
    Calculate();
    buffset(9);
}

function el_buff(id_f) {
    var this_arr = [0, 1800, 1200, 600, 1800, 1200, 600];
    if ($('div#el_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 7; i++) {
            if ($('div#el_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#el_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#ele_' + i).val() > 0) {
                $('#ele_' + i).val(0)
            }
        }
        $('div#el_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#el_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#el_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_10" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_10" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_10').html(total_buff);
        $('#icon_10 div.name_b').addClass('name_s');
        $('#icon_10 div.name_s').removeClass('name_b');
        $('#icon_10 #hidd').removeClass('hidd_b');
        $('#icon_10 #hidd').addClass('hidd_s');
        $('#icon_10 .buff_description_ras').css('color', 'D6D6D6');
        $('#ele_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#el_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#ele_' + i).val() > 0) {
                $('#ele_' + i).val(0)
            }
        }
        $('#icon_10').html('');
    }
    Calculate();
    buffset(10);
}

function p_buff(id_f) {
    var this_arr = [0, 10, 70, 4, 10, 5];
    if ($('div#p_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 6; i++) {
            if ($('div#p_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#p_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#pis_' + i).val() > 0) {
                $('#pis_' + i).val(0)
            }
        }
        $('div#p_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#p_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#p_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_11" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_11" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_11').html(total_buff);
        $('#icon_11 div.name_b').addClass('name_s');
        $('#icon_11 div.name_s').removeClass('name_b');
        $('#icon_11 #hidd').removeClass('hidd_b');
        $('#icon_11 #hidd').addClass('hidd_s');
        $('#icon_11 .buff_description_ras').css('color', 'D6D6D6');
        $('#pis_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#p_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#pis_' + i).val() > 0) {
                $('#pis_' + i).val(0)
            }
        }
        $('#icon_11').html('');
    }
    Calculate();
    buffset(11);
}

function foliant_buff(id_f) {
    var this_arr = [0, 25, 20, 15, 10, 5, 2, 10, 69, 48];
    if ($('div#fol_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 10; i++) {
            if ($('div#fol_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#fol_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#folik_' + i).val() > 0) {
                $('#folik_' + i).val(0)
            }
        }
        $('div#fol_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#fol_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#fol_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_12" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_12" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_12').html(total_buff);
        $('#icon_12 div.name_b').addClass('name_s');
        $('#icon_12 div.name_s').removeClass('name_b');
        $('#icon_12 #hidd').removeClass('hidd_b');
        $('#icon_12 #hidd').addClass('hidd_s');
        $('#icon_12 .buff_description_ras').css('color', 'D6D6D6');
        $('#folik_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#fol_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#folik_' + i).val() > 0) {
                $('#folik_' + i).val(0)
            }
        }
        $('#icon_12').html('');
    }
    Calculate();
    buffset(12);
}

function svit_buff(id_f) {
    var this_arr = [0, 0, 0, 5, 1000, 8, 1500];
    var this_num_arr = [0, 0, 0, 3, 4, 3, 4];
    var this_num_arr_block = [0, 0, 0, 5, 6, 3, 4];
    if ($('div#s_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        $('div#s_' + id_f + '.tooltip_buff img').removeClass('off_img');
        if ($('div#s_' + this_num_arr_block[id_f] + '.tooltip_buff img').hasClass('off_img')) {
        }
        else {
            $('div#s_' + this_num_arr_block[id_f] + '.tooltip_buff img').addClass('off_img');
        }

        var f_icon = $('div#s_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#s_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_1' + this_num_arr[id_f] + '" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_1' + this_num_arr[id_f] + '" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_1' + this_num_arr[id_f]).html(total_buff);
        $('#icon_1' + this_num_arr[id_f] + ' div.name_b').addClass('name_s');
        $('#icon_1' + this_num_arr[id_f] + ' div.name_s').removeClass('name_b');
        $('#icon_1' + this_num_arr[id_f] + ' #hidd').removeClass('hidd_b');
        $('#icon_1' + this_num_arr[id_f] + ' #hidd').addClass('hidd_s');
        $('#icon_1' + this_num_arr[id_f] + ' .buff_description_ras').css('color', 'D6D6D6');
        $('#svit_' + this_num_arr[id_f]).val(this_arr[id_f]);
    }
    else {
        $('div#s_' + id_f + '.tooltip_buff img').addClass('off_img');
        $('#svit_' + this_num_arr[id_f]).val(0);
        $('#icon_1' + this_num_arr[id_f]).html('');
    }
    Calculate();
    buffset(10 + this_num_arr[id_f]);
}

function meat_buff(id_f) {
    var this_arr = [0, 12, 21, 36, 60, 12, 21, 36, 60, 12, 21, 36, 60, 12, 21, 36, 60, 70, 70, 60, 60, 60];
    if ($('div#m_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 22; i++) {
            if ($('div#m_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#m_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#meat_' + i).val() > 0) {
                $('#meat_' + i).val(0)
            }
        }
        $('div#m_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#m_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#m_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_15" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_15" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_15').html(total_buff);
        $('#icon_15 div.name_b').addClass('name_s');
        $('#icon_15 div.name_s').removeClass('name_b');
        $('#icon_15 #hidd').removeClass('hidd_b');
        $('#icon_15 #hidd').addClass('hidd_s');
        $('#icon_15 .buff_description_ras').css('color', 'D6D6D6');
        $('#meat_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#m_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#meat_' + i).val() > 0) {
                $('#meat_' + i).val(0)
            }
        }
        $('#icon_15').html('');
    }
    Calculate();
    buffset(15);
}


function n_buff_xp(id_f) {
    var this_arr = [0, 218, 436, 728, 1040, 1300, 1300];
    if ($('div#n_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 7; i++) {
            if ($('div#n_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#n_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#nap_' + i).val() > 0) {
                $('#nap_' + i).val(0)
            }
        }
        $('div#n_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#n_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#n_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_16" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_16" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_16').html(total_buff);
        $('#icon_16 div.name_b').addClass('name_s');
        $('#icon_16 div.name_s').removeClass('name_b');
        $('#icon_16 #hidd').removeClass('hidd_b');
        $('#icon_16 #hidd').addClass('hidd_s');
        $('#icon_16 .buff_description_ras').css('color', 'D6D6D6');
        $('#nap_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#n_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#nap_' + i).val() > 0) {
                $('#nap_' + i).val(0)
            }
        }
        $('#icon_16').html('');
    }
    Calculate();
    buffset(16);
}

function n_buff_mp(id_f) {
    var this_arr = [0, 0, 0, 0, 0, 0, 0, 218, 436, 728, 1040, 1300, 1300];
    if ($('div#n_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 7; i < 13; i++) {
            if ($('div#n_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#n_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 7, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#nap_' + i).val() > 0) {
                $('#nap_' + i).val(0)
            }
        }
        $('div#n_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#n_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#n_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_49" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_49" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_49').html(total_buff);
        $('#icon_49 div.name_b').addClass('name_s');
        $('#icon_49 div.name_s').removeClass('name_b');
        $('#icon_49 #hidd').removeClass('hidd_b');
        $('#icon_49 #hidd').addClass('hidd_s');
        $('#icon_49 .buff_description_ras').css('color', 'D6D6D6');
        $('#nap_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#n_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 7, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#nap_' + i).val() > 0) {
                $('#nap_' + i).val(0)
            }
        }
        $('#icon_49').html('');
    }
    Calculate();
    buffset(49);
}

function pet_buff(id_f) {
    var this_arr = [0, 0, 0, 0, 5, 1200];
    if ($('div#pet_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        $('div#pet_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#pet_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#pet_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_4' + id_f + '" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_4' + id_f + '" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_4' + id_f).html(total_buff);
        $('#icon_4' + id_f + ' div.name_b').addClass('name_s');
        $('#icon_4' + id_f + ' div.name_s').removeClass('name_b');
        $('#icon_4' + id_f + ' #hidd').removeClass('hidd_b');
        $('#icon_4' + id_f + ' #hidd').addClass('hidd_s');
        $('#icon_4' + id_f + ' .buff_description_ras').css('color', 'D6D6D6');
        $('#pets_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#pet_' + id_f + '.tooltip_buff img').addClass('off_img');
        $('#pets_' + id_f).val(0);
        $('#icon_4' + id_f).html('');
    }
    Calculate();
    buffset(40 + id_f);
}

function svit_a_buff(id_f) {
    var this_arr = [0, 500, 397, 350];
    if ($('div#s_a_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 4; i++) {
            if ($('div#s_a_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#s_a_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#svit_a_' + i).val() > 0) {
                $('#svit_a_' + i).val(0)
            }
        }
        $('div#s_a_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#s_a_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#s_a_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_46" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_46" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_46').html(total_buff);
        $('#icon_46 div.name_b').addClass('name_s');
        $('#icon_46 div.name_s').removeClass('name_b');
        $('#icon_46 #hidd').removeClass('hidd_b');
        $('#icon_46 #hidd').addClass('hidd_s');
        $('#icon_46 .buff_description_ras').css('color', 'D6D6D6');
        $('#svit_a_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#s_a_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#svit_a_' + i).val() > 0) {
                $('#svit_a_' + i).val(0)
            }
        }
        $('#icon_46').html('');
    }
    Calculate();
    buffset(46);
}

function ba_buff(id_f) {
    var this_arr_1 = [0, 5, 10, 5, 10, 5, 10];
    var this_arr_2 = [0, 4, 6, 4, 6, 4, 6];
    if ($('div#ba_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 7; i++) {
            if ($('div#ba_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#ba_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr_1.length; i < this_arrlength; i++) {
            if ($('#bash_a_1_' + i).val() > 0) {
                $('#bash_a_1_' + i).val(0);
                $('#bash_a_2_' + i).val(0)
            }
        }
        $('div#ba_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#ba_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#ba_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_47" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_47" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_47').html(total_buff);
        $('#icon_47 div.name_b').addClass('name_s');
        $('#icon_47 div.name_s').removeClass('name_b');
        $('#icon_47 #hidd').removeClass('hidd_b');
        $('#icon_47 #hidd').addClass('hidd_s');
        $('#icon_47 .buff_description_ras').css('color', 'D6D6D6');
        $('#bash_a_1_' + id_f).val(this_arr_1[id_f]);
        $('#bash_a_2_' + id_f).val(this_arr_2[id_f]);
    }
    else {
        $('div#ba_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr_1.length; i < this_arrlength; i++) {
            if ($('#bash_a_1_' + i).val() > 0) {
                $('#bash_a_1_' + i).val(0);
                $('#bash_a_2_' + i).val(0)
            }
        }
        $('#icon_47').html('');
    }
    Calculate();
    buffset(47);
}

function kon_buff(id_f) {
    var this_arr = [0, 30, 30, 30, 30, 30, 30];
    if ($('div#kon_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        for (var i = 1; i < 7; i++) {
            if ($('div#kon_' + i + '.tooltip_buff img').not('.off_img')) {
                $('div#kon_' + i + '.tooltip_buff img').addClass('off_img');
            }
        }
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#kondit_' + i).val() > 0) {
                $('#kondit_' + i).val(0)
            }
        }
        $('div#kon_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#kon_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#kon_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_48" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_48" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_48').html(total_buff);
        $('#icon_48 div.name_b').addClass('name_s');
        $('#icon_48 div.name_s').removeClass('name_b');
        $('#icon_48 #hidd').removeClass('hidd_b');
        $('#icon_48 #hidd').addClass('hidd_s');
        $('#icon_48 .buff_description_ras').css('color', 'D6D6D6');
        $('#kondit_' + id_f).val(this_arr[id_f]);
    }
    else {
        $('div#kon_' + id_f + '.tooltip_buff img').addClass('off_img');
        for (var i = 1, this_arrlength = this_arr.length; i < this_arrlength; i++) {
            if ($('#kondit_' + i).val() > 0) {
                $('#kondit_' + i).val(0)
            }
        }
        $('#icon_48').html('');
    }
    Calculate();
    buffset(48);
}

function od_buff(id_f) {
    var this_arr_1 = [0, 5, 3];
    var this_arr_2 = [0, 2, 4];
    if ($('div#od_' + id_f + '.tooltip_buff img').hasClass('off_img')) {
        $('div#od_' + id_f + '.tooltip_buff img').removeClass('off_img');
        var f_icon = $('div#od_' + id_f + '.tooltip_buff img').attr('src');
        var f_body = $('span#od_' + id_f + '.tooltip_buff').html();
        var total_buff = '<div id="x_5' + id_f + '" class="tooltip_title"><img src="' + f_icon + '" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_5' + id_f + '" class="tooltip_title">' + f_body + '</span></div></div>';
        $('#icon_5' + id_f).html(total_buff);
        $('#icon_5' + id_f + ' div.name_b').addClass('name_s');
        $('#icon_5' + id_f + ' div.name_s').removeClass('name_b');
        $('#icon_5' + id_f + ' #hidd').removeClass('hidd_b');
        $('#icon_5' + id_f + ' #hidd').addClass('hidd_s');
        $('#icon_5' + id_f + ' .buff_description_ras').css('color', 'D6D6D6');
        $('#ods_1_' + id_f).val(this_arr_1[id_f]);
        $('#ods_2_' + id_f).val(this_arr_2[id_f]);
    }
    else {
        $('div#od_' + id_f + '.tooltip_buff img').addClass('off_img');
        $('#ods_1_' + id_f).val(0);
        $('#ods_2_' + id_f).val(0);
        $('#icon_5' + id_f).html('');
    }
    Calculate();
    buffset(50 + id_f);
}

function q_tip_buff(id_b) {
    $(function () {
        var mouseOnDiv = $('#' + id_b + '.tooltip_buff');
        var Content = $('.tooltip_buff span#' + id_b).html();
        var tipContent = $(Content);
        mouseOnDiv.data('powertipjq', tipContent);
        mouseOnDiv.powerTip({
            placement: 'e',
            followMouse: true
        });
    });
}


function CheckNum(id, min, max) {
    if ($('#field_' + id).val() < Number(min)) {
        $('#field_' + id).val(Number(min));
    }
    if ($('#field_' + id).val() > Number(max)) {
        $('#field_' + id).val(Number(max));
    }
}


function CheckS() {
    $('.sintez_int').numberMask({beforePoint: 2});
    $('.sintez_int2').numberMask({beforePoint: 4});
    $('.sintez_float').numberMask({
        type: 'float',
        beforePoint: 2,
        afterPoint: 1,
        defaultValueInput: '15.2',
        decimalMark: '.'
    });
    $('.sintez_float_2').numberMask({
        type: 'float',
        beforePoint: 1,
        afterPoint: 1,
        defaultValueInput: '9.2',
        decimalMark: '.'
    });
}

function setSintez(stat) {
    var full_stats_arr = ['Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа', 'Критический урон заклинаний', 'Критический урон в ближнем бою', 'Критический урон в дальнем бою', 'Критический эффект исцеления', 'Игнорирование сопротивления', 'Пробивание брони', 'Объем здоровья', 'Сопротивление', 'Урон в ближнем бою со спины', 'Эффективность исцеления', 'Мана', 'Восприимчивость к исцелению', 'Восстановление здоровья в бою', 'Восстановление маны в бою', 'Показатель устойчивости в ближнем бою', 'Показатель устойчивости в дальнем бою', 'Показатель устойчивости к заклинаниям', 'Тактическая подготовка', 'Устойчивости к критическому урону'];

    var stats_znak = ['', '', '', '', '', '%+', '%+', '%+', '%+', '+', '+', '+', '+', '%+', '+', '+', '%+', '+', '+', '+', '+', '+', '+', '+'];

    var stats = [];
    var vals = [];
    stats[1] = full_stats_arr[$('#cat_1 :selected').val() - 1];
    vals[1] = $('#field_1').val();
    stats[2] = full_stats_arr[$('#cat_2 :selected').val() - 1];
    vals[2] = $('#field_2').val();
    stats[3] = full_stats_arr[$('#cat_3 :selected').val() - 1];
    vals[3] = $('#field_3').val();

    var stats_arr = ['', '', '', ''];

    for (var i = 0, full_stats_arrlength = full_stats_arr.length; i < full_stats_arrlength; i++) {
        $('#sintez_' + i).val(0);
    }
    if (vals[1] != 0) {
        for (var i = 1; i < 4; i++) {
            if (vals[i] > 0) {
                stats_arr[i] = stats[i] + ' <a style="font-weight:12px">' + vals[i] + '</a>' + stats_znak[$('#cat_' + i + ' :selected').val() - 1] + '<br />';
                var stats_arr_set = stats_arr.join("\n");
            }
        }

        for (var s = 1; s < 4; s++) {
            for (var i = 0, full_stats_arrlength = full_stats_arr.length; i < full_stats_arrlength; i++) {
                if (stats[s] == full_stats_arr[i]) {
                    $('#sintez_' + i).val(vals[s]);
                }
            }
        }

        var result_S = '<font style="color:#00a000">' + stats_arr_set + '</font>';
    }
    if (vals[1] == 0) {
        result_S = '<a>Неизменяемый эффект:</a> <a style="color:#FF9D3C">' + stat + '</a>';
    }
    $('#sintez').html(result_S);
    document.getElementById('ef_editor').innerHTML = "";
}

function setSintez_k() {
    var full_stats_arr = ['Защита', 'Сопротивление', 'Здоровье', 'Дополнительный урон при сражении с монстрами в б.бою', 'Дополнительный урон при сражении с монстрами в д.бою', 'Дополнительный урон при сражении с монстрами заклинаниями', 'Устойчивость при сражении с монстрами', 'Получаемый урон от заклинаний', 'Получаемый урон в ближнем бою', 'Получаемый урон в дальнем бою', 'Восприимчивость к исцелению', 'Время применения умений', 'Урон в ближнем бою со спины', 'Устойчивости к крит. урону', 'Тактическая подготовка', 'Устойчивость к атакам в PvP', 'Пробивание брони', 'Игнорирование сопротивления', 'Скорость передвижения', 'Эффективность исцеления', 'Сила заклинаний', 'Сила атаки в ближнем бою', 'Сила атаки в дальнем бою', 'Дальность обнаружения скрытых существ', 'Уклонение', 'Блокирование', 'Парирование атак ближнего боя', 'Критический урон в ближнем бою', 'Критический урон в дальнем бою', 'Критический урон заклинаний', 'Критический эффект исцеления', 'Доп. урон умений заклинателя', 'Доп. урон умений ближнего боя', 'Доп. урон умений дальнего боя', 'Доп. эффективность умений целителя', 'Получаемый урон', 'Шанс крит. эффекта исцеления', 'Шанс крит. удара в дальнем бою', 'Шанс крит. удара заклинанием', 'Шанс крит. удара в ближнем бою'];

    var stats_znak = ['+', '+', '+', '%+', '%+', '%+', '%+', '%-', '%-', '%-', '%+', '%+', '%+', '+', '+', '+', '+', '+', '%+', '+', '+', '+', '+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%+', '%-', '%+', '%+', '%+', '%+'];

    var stats = [];
    var vals = [];
    stats[1] = full_stats_arr[$('#cat_1 :selected').val() - 1];
    vals[1] = $('#field_1').val();
    stats[2] = full_stats_arr[$('#cat_2 :selected').val() - 1];
    vals[2] = $('#field_2').val();
    stats[3] = full_stats_arr[$('#cat_3 :selected').val() - 1];
    vals[3] = $('#field_3').val();
    stats[4] = full_stats_arr[$('#cat_4 :selected').val() - 1];
    vals[4] = $('#field_4').val();
    stats[5] = full_stats_arr[$('#cat_5 :selected').val() - 1];
    vals[5] = $('#field_5').val();

    var stats_arr = ['', '', '', '', '', ''];

    for (var i = 0, full_stats_arrlength = full_stats_arr.length; i < full_stats_arrlength; i++) {
        $('#sintez_k_' + i).val(0);
    }

    if (vals[1] != 0) {
        for (var i = 1; i < 6; i++) {
            if (vals[i] > 0) {
                stats_arr[i] = stats[i] + ' <a style="font-weight:12px">' + vals[i] + '</a>' + stats_znak[$('#cat_' + i + ' :selected').val() - 1] + '<br />';
                var stats_arr_set = stats_arr.join("\n");
            }
        }
        for (var s = 1; s < 6; s++) {
            for (var i = 0, full_stats_arrlength = full_stats_arr.length; i < full_stats_arrlength; i++) {
                if (stats[s] == full_stats_arr[i]) {
                    $('#sintez_k_' + i).val(vals[s]);
                }
            }
        }

        var result_S = '<font>' + stats_arr_set + '</font>';
    }
    if (vals[1] == 0) {
        result_S = '<a>Выбрать эффекты</a>';
    }
    $('#sintez_k').html(result_S);
    document.getElementById('ef_editor').innerHTML = "";
}

function sintez(base_var, s_grade, max_grade) {


    var var_types = [[], [], [], [], [], []];
    var var_arr = [[], [], [], [], [], []];


    if (max_grade == 'c') {
        var_arr[1] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа'];
        var_arr[2] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа'];
        var_arr[3] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа'];

    }

    if (max_grade == 's') {
        var_arr[1] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа', 'Критический урон заклинаний', 'Критический урон в ближнем бою', 'Критический урон в дальнем бою', 'Критический эффект исцеления', 'Игнорирование сопротивления', 'Пробивание брони', 'Здоровье', 'Сопротивление', 'Урон в ближнем бою со спины', 'Эффективность исцеления'];
        var_arr[2] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа'];
        var_arr[3] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа'];

    }

    if (max_grade == 'l') {
        var_arr[1] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа', 'Критический урон заклинаний', 'Критический урон в ближнем бою', 'Критический урон в дальнем бою', 'Критический эффект исцеления', 'Игнорирование сопротивления', 'Пробивание брони', 'Здоровье', 'Сопротивление', 'Урон в ближнем бою со спины', 'Эффективность исцеления', 'Мана', 'Восприимчивость к исцелению', 'Восстановление здоровья в бою', 'Восстановление маны в бою', 'Показатель устойчивости в ближнем бою', 'Показатель устойчивости в дальнем бою', 'Показатель устойчивости к заклинаниям', 'Тактическая подготовка', 'Устойчивости к критическому урону'];
        var_arr[2] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа', '', '', '', '', '', '', '', '', '', '', 'Мана', 'Восприимчивость к исцелению', 'Восстановление здоровья в бою', 'Восстановление маны в бою', 'Показатель устойчивости в ближнем бою', 'Показатель устойчивости в дальнем бою', 'Показатель устойчивости к заклинаниям', 'Тактическая подготовка', 'Устойчивости к критическому урону'];
        var_arr[3] = ['', 'Сила', 'Ловкость', 'Выносливость', 'Интеллект', 'Сила духа', '', '', '', '', '', '', '', '', '', '', 'Мана', 'Восприимчивость к исцелению', 'Восстановление здоровья в бою', 'Восстановление маны в бою', 'Показатель устойчивости в ближнем бою', 'Показатель устойчивости в дальнем бою', 'Показатель устойчивости к заклинаниям', 'Тактическая подготовка', 'Устойчивости к критическому урону'];

    }

    if (max_grade == 'm') {
        var_arr[1] = ['', 'Защита', 'Сопротивление', 'Здоровье', 'Дополнительный урон при сражении с монстрами в б.бою', 'Дополнительный урон при сражении с монстрами в д.бою', 'Дополнительный урон при сражении с монстрами заклинаниями', 'Устойчивость при сражении с монстрами', 'Получаемый урон от заклинаний', 'Получаемый урон в ближнем бою', 'Получаемый урон в дальнем бою', 'Восприимчивость к исцелению', 'Время применения умений', 'Урон в ближнем бою со спины', 'Устойчивости к крит. урону', 'Тактическая подготовка', 'Устойчивость к атакам в PvP', 'Пробивание брони', 'Игнорирование сопротивления', 'Скорость передвижения', 'Эффективность исцеления', 'Сила заклинаний', 'Сила атаки в ближнем бою', 'Сила атаки в дальнем бою', 'Дальность обнаружения скрытых существ', 'Уклонение', 'Блокирование', 'Парирование атак ближнего боя', 'Критический урон в ближнем бою', 'Критический урон в дальнем бою', 'Критический урон заклинаний', 'Критический эффект исцеления', 'Доп. урон умений заклинателя', 'Доп. урон умений ближнего боя', 'Доп. урон умений дальнего боя', 'Доп. эффективность умений целителя', 'Получаемый урон', 'Шанс крит. эффекта исцеления', 'Шанс крит. удара в дальнем бою', 'Шанс крит. удара заклинанием', 'Шанс крит. удара в ближнем бою'];
    }

    if (max_grade != 'm') {
        for (var u = 3; u > 0; u--) {
            for (var i = 1, var_arr_length = var_arr[u].length; i < var_arr_length; i++) {
                if (var_arr[u][i].length > 0) {
                    var sliced = var_arr[u][i].slice(0, 22);
                    if (sliced.length < var_arr[u][i].length) {
                        sliced += '..';
                    }
                    var_types[u][i] = "<option value='" + i + "'>" + sliced + "</option>";
                }
            }
        }
        ;


        var option_types_1 = var_types[1].join("\n");
        var option_types_2 = var_types[2].join("\n");
        var option_types_3 = var_types[3].join("\n");

        var type0_0 = "<div style='position:absolute; margin-left:0px; margin-top:40px;'><select onchange='CheckTypes(1," + s_grade + ",\"" + max_grade + "\")' id='cat_1'><option value='0'>Тип</div></option>" + option_types_1 + "</select></div>";

        var type0_1 = "<div id='field_1_up' style='position:absolute; margin-left:200px; margin-top:40px;color:#755119;'><input id='field_1' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px' onfocus='CheckS()' onchange='CheckNum(1,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:110px;'>(0 - 0)</div></div>";

        var type1_0 = "<div style='position:absolute; margin-left:0px; margin-top:70px;'><select onchange='CheckTypes(2," + s_grade + ",\"" + max_grade + "\")' id='cat_2'><option value='0'>Тип</option>" + option_types_2 + "</select></div>";

        var type1_1 = "<div id='field_2_up' style='position:absolute; margin-left:200px; margin-top:70px;color:#755119;'><input id='field_2' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()'  onchange='CheckNum(2,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        var type2_0 = "<div style='position:absolute; margin-left:0px; margin-top:100px;'><select onchange='CheckTypes(3," + s_grade + ",\"" + max_grade + "\")' id='cat_3'><option value='0'>Тип</option>" + option_types_3 + "</select></div>";

        var type2_1 = "<div id='field_3_up' style='position:absolute; margin-left:200px; margin-top:100px;color:#755119;'><input id='field_3' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()' onchange='CheckNum(3,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='sintez'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div>" + type0_0 + "" + type0_1 + "" + type1_0 + "" + type1_1 + "" + type2_0 + "" + type2_1 + "<div style='margin-top:125px !important' class='button_ef' onClick='setSintez(\"" + base_var + "\")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div></div>";
    }

    if (max_grade == 'm') {

        for (var i = 1, var_arr_length = var_arr[1].length; i < var_arr_length; i++) {
            if (var_arr[1][i].length > 0) {
                var sliced = var_arr[1][i].slice(0, 22);
                if (sliced.length < var_arr[1][i].length) {
                    sliced += '..';
                }
                var_types[1][i] = "<option value='" + i + "'>" + sliced + "</option>";
            }
        }


        var option_types_1 = var_types[1].join("\n");

        var type0_0 = "<div style='position:absolute; margin-left:0px; margin-top:40px;'><select onchange='CheckTypes_k(1," + s_grade + ")' id='cat_1'><option value='0'>Тип</div></option>" + option_types_1 + "</select></div>";

        var type0_1 = "<div id='field_1_up' style='position:absolute; margin-left:200px; margin-top:40px;color:#755119;'><input id='field_1' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px' onfocus='CheckS()' onchange='CheckNum(1,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:110px;'>(0 - 0)</div></div>";

        var type1_0 = "<div style='position:absolute; margin-left:0px; margin-top:70px;'><select onchange='CheckTypes_k(2," + s_grade + ")' id='cat_2'><option value='0'>Тип</option>" + option_types_1 + "</select></div>";

        var type1_1 = "<div id='field_2_up' style='position:absolute; margin-left:200px; margin-top:70px;color:#755119;'><input id='field_2' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()'  onchange='CheckNum(2,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        var type2_0 = "<div style='position:absolute; margin-left:0px; margin-top:100px;'><select onchange='CheckTypes_k(3," + s_grade + ")' id='cat_3'><option value='0'>Тип</option>" + option_types_1 + "</select></div>";

        var type2_1 = "<div id='field_3_up' style='position:absolute; margin-left:200px; margin-top:100px;color:#755119;'><input id='field_3' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()' onchange='CheckNum(3,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        var type3_0 = "<div style='position:absolute; margin-left:0px; margin-top:130px;'><select onchange='CheckTypes_k(4," + s_grade + ")' id='cat_4'><option value='0'>Тип</option>" + option_types_1 + "</select></div>";

        var type3_1 = "<div id='field_4_up' style='position:absolute; margin-left:200px; margin-top:130px;color:#755119;'><input id='field_4' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()' onchange='CheckNum(4,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        var type4_0 = "<div style='position:absolute; margin-left:0px; margin-top:160px;'><select onchange='CheckTypes_k(5," + s_grade + ")' id='cat_5'><option value='0'>Тип</option>" + option_types_1 + "</select></div>";

        var type4_1 = "<div id='field_5_up' style='position:absolute; margin-left:200px; margin-top:160px;color:#755119;'><input id='field_5' class='sintez_int' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px'' onfocus='CheckS()' onchange='CheckNum(5,0,0)'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:45px;'>(0 - 0)</div></div>";

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='sintez_k'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div>" + type0_0 + "" + type0_1 + "" + type1_0 + "" + type1_1 + "" + type2_0 + "" + type2_1 + "" + type3_0 + "" + type3_1 + "" + type4_0 + "" + type4_1 + "<div style='margin-top:190px !important' class='button_ef' onClick='setSintez_k()'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div></div>";
    }

}

function CheckTypes_k(id, s_grade) {
    var cat_num = [0, 1, 2, 3, 4, 5];
    var minus_type = $('#cat_' + id + ' :selected').val();
    if (minus_type > 0) {
        cat_num.splice(id, 1);
        for (var i = 1; i < cat_num.length; i++) {
            $('#cat_' + cat_num[i] + ' [value=' + minus_type + ']').remove();
        }
    }
    ;

    var m1_1 = [];
    var m2_1 = [];
    var m3_1 = [];
    var m4_1 = [];
    var m5_1 = [];
    var m1_2 = [];
    var m2_2 = [];
    var m3_2 = [];
    var m4_2 = [];
    var m5_2 = [];
    var m1_3 = [];
    var m2_3 = [];
    var m3_3 = [];
    var m4_3 = [];
    var m5_3 = [];
    var m1_4 = [];
    var m2_4 = [];
    var m3_4 = [];
    var m4_4 = [];
    var m5_4 = [];
    var m1_5 = [];
    var m2_5 = [];
    var m3_5 = [];
    var m4_5 = [];
    var m5_5 = [];
    var m1_6 = [];
    var m2_6 = [];
    var m3_6 = [];
    var m4_6 = [];
    var m5_6 = [];
    var m1_7 = [];
    var m2_7 = [];
    var m3_7 = [];
    var m4_7 = [];
    var m5_7 = [];
    var m1_8 = [];
    var m2_8 = [];
    var m3_8 = [];
    var m4_8 = [];
    var m5_8 = [];
    var m1_9 = [];
    var m2_9 = [];
    var m3_9 = [];
    var m4_9 = [];
    var m5_9 = [];
    var m1_10 = [];
    var m2_10 = [];
    var m3_10 = [];
    var m4_10 = [];
    var m5_10 = [];
    var m1_11 = [];
    var m2_11 = [];
    var m3_11 = [];
    var m4_11 = [];
    var m5_11 = [];

    if (minus_type == 1 || minus_type == 2) {
        var classS = 'sintez_int2';//Защита
        m1_1 = [0, 0];
        m1_2 = [60, 100];
        m1_3 = [140, 180];
        m1_4 = [220, 260];
        m1_5 = [300, 340];
        m1_6 = [380, 420];
        m1_7 = [480, 540];
        m1_8 = [610, 680];
        m1_9 = [750, 820];
        m1_10 = [850, 900];
        m1_11 = [980, 1180];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [140, 180];
        m2_4 = [220, 260];
        m2_5 = [300, 340];
        m2_6 = [380, 420];
        m2_7 = [480, 540];
        m2_8 = [610, 680];
        m2_9 = [750, 820];
        m2_10 = [850, 900];
        m2_11 = [980, 1180];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [220, 260];
        m3_5 = [300, 340];
        m3_6 = [380, 420];
        m3_7 = [480, 540];
        m3_8 = [610, 680];
        m3_9 = [750, 820];
        m3_10 = [850, 900];
        m3_11 = [980, 1180];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [380, 420];
        m4_7 = [480, 540];
        m4_8 = [610, 680];
        m4_9 = [750, 820];
        m4_10 = [850, 900];
        m4_11 = [980, 1180];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [850, 900];
        m5_11 = [980, 1180];
    }
    if (minus_type == 3) {
        var classS = 'sintez_int2';//Здоровье
        m1_1 = [0, 0];
        m1_2 = [90, 140];
        m1_3 = [190, 240];
        m1_4 = [290, 340];
        m1_5 = [390, 440];
        m1_6 = [490, 540];
        m1_7 = [610, 680];
        m1_8 = [760, 840];
        m1_9 = [920, 1000];
        m1_10 = [1100, 1200];
        m1_11 = [1300, 1425];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [190, 240];
        m2_4 = [290, 340];
        m2_5 = [390, 440];
        m2_6 = [490, 540];
        m2_7 = [610, 680];
        m2_8 = [760, 840];
        m2_9 = [920, 1000];
        m2_10 = [1100, 1200];
        m2_11 = [1300, 1425];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [290, 340];
        m3_5 = [390, 440];
        m3_6 = [490, 540];
        m3_7 = [610, 680];
        m3_8 = [760, 840];
        m3_9 = [920, 1000];
        m3_10 = [1100, 1200];
        m3_11 = [1300, 1425];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [490, 540];
        m4_7 = [610, 680];
        m4_8 = [760, 840];
        m4_9 = [920, 1000];
        m4_10 = [1100, 1200];
        m4_11 = [1300, 1425];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [1100, 1200];
        m5_11 = [1300, 1425];
    }
    if (minus_type == 4 || minus_type == 5 || minus_type == 6) {
        var classS = 'sintez_float_2';//Дополнительный урон при сражении с монстрами
        m1_1 = [0, 0];
        m1_2 = [0.8, 0.9];
        m1_3 = [1.1, 1.2];
        m1_4 = [1.4, 1.5];
        m1_5 = [1.7, 1.8];
        m1_6 = [2.0, 2.1];
        m1_7 = [2.4, 2.6];
        m1_8 = [2.8, 3.0];
        m1_9 = [3.3, 3.6];
        m1_10 = [3.9, 4.2];
        m1_11 = [4.5, 4.9];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [1.1, 1.2];
        m2_4 = [1.4, 1.5];
        m2_5 = [1.7, 1.8];
        m2_6 = [2.0, 2.1];
        m2_7 = [2.4, 2.6];
        m2_8 = [2.8, 3.0];
        m2_9 = [3.3, 3.6];
        m2_10 = [3.9, 4.2];
        m2_11 = [4.5, 4.9];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [1.4, 1.5];
        m3_5 = [1.7, 1.8];
        m3_6 = [2.0, 2.1];
        m3_7 = [2.4, 2.6];
        m3_8 = [2.8, 3.0];
        m3_9 = [3.3, 3.6];
        m3_10 = [3.9, 4.2];
        m3_11 = [4.5, 4.9];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [2.0, 2.1];
        m4_7 = [2.4, 2.6];
        m4_8 = [2.8, 3.0];
        m4_9 = [3.3, 3.6];
        m4_10 = [3.9, 4.2];
        m4_11 = [4.5, 4.9];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [3.9, 4.2];
        m5_11 = [4.5, 4.9];
    }
    if (minus_type == 7) {
        var classS = 'sintez_float_2';//Устойчивость при сражении с монстрами
        m1_1 = [0, 0];
        m1_2 = [1.4, 1.5];
        m1_3 = [1.6, 1.7];
        m1_4 = [1.8, 1.9];
        m1_5 = [2.0, 2.0];
        m1_6 = [2.1, 2.1];
        m1_7 = [2.2, 2.3];
        m1_8 = [2.5, 2.6];
        m1_9 = [2.8, 3.0];
        m1_10 = [3.2, 3.4];
        m1_11 = [3.6, 3.9];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [1.6, 1.7];
        m2_4 = [1.8, 1.9];
        m2_5 = [2.0, 2.0];
        m2_6 = [2.1, 2.1];
        m2_7 = [2.2, 2.3];
        m2_8 = [2.5, 2.6];
        m2_9 = [2.8, 3.0];
        m2_10 = [3.2, 3.4];
        m2_11 = [3.6, 3.9];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [1.8, 1.9];
        m3_5 = [2.0, 2.0];
        m3_6 = [2.1, 2.1];
        m3_7 = [2.2, 2.3];
        m3_8 = [2.5, 2.6];
        m3_9 = [2.8, 3.0];
        m3_10 = [3.2, 3.4];
        m3_11 = [3.6, 3.9];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [2.1, 2.1];
        m4_7 = [2.2, 2.3];
        m4_8 = [2.5, 2.6];
        m4_9 = [2.8, 3.0];
        m4_10 = [3.2, 3.4];
        m4_11 = [3.6, 3.9];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [3.2, 3.4];
        m5_11 = [3.6, 3.9];
    }
    if (minus_type == 8 || minus_type == 9 || minus_type == 10) {
        var classS = 'sintez_float_2';//Получаемый урон от заклинаний
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0.4, 0.5];
        m1_4 = [0.6, 0.7];
        m1_5 = [0.8, 0.9];
        m1_6 = [1.0, 1.1];
        m1_7 = [1.1, 1.2];
        m1_8 = [1.4, 1.5];
        m1_9 = [1.7, 1.8];
        m1_10 = [2.0, 2.3];
        m1_11 = [2.5, 2.8];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0.4, 0.5];
        m2_4 = [0.6, 0.7];
        m2_5 = [0.8, 0.9];
        m2_6 = [1.0, 1.1];
        m2_7 = [1.1, 1.2];
        m2_8 = [1.4, 1.5];
        m2_9 = [1.7, 1.8];
        m2_10 = [2.0, 2.3];
        m2_11 = [2.5, 2.8];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0.6, 0.7];
        m3_5 = [0.8, 0.9];
        m3_6 = [1.0, 1.1];
        m3_7 = [1.1, 1.2];
        m3_8 = [1.4, 1.5];
        m3_9 = [1.7, 1.8];
        m3_10 = [2.0, 2.3];
        m3_11 = [2.5, 2.8];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [1.0, 1.1];
        m4_7 = [1.1, 1.2];
        m4_8 = [1.4, 1.5];
        m4_9 = [1.7, 1.8];
        m4_10 = [2.0, 2.3];
        m4_11 = [2.5, 2.8];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [2.0, 2.3];
        m5_11 = [2.5, 2.8];
    }
    if (minus_type == 11) {
        var classS = 'sintez_float';//Восприимчивость к исцелени
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0.2, 0.2];
        m1_4 = [0.5, 0.7];
        m1_5 = [1.0, 1.2];
        m1_6 = [1.5, 1.7];
        m1_7 = [2.3, 2.8];
        m1_8 = [3.6, 4.6];
        m1_9 = [5.2, 6.0];
        m1_10 = [7.0, 8.0];
        m1_11 = [9.0, 10.0];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0.2, 0.2];
        m2_4 = [0.5, 0.7];
        m2_5 = [1.0, 1.2];
        m2_6 = [1.5, 1.7];
        m2_7 = [2.3, 2.8];
        m2_8 = [3.6, 4.6];
        m2_9 = [5.2, 6.0];
        m2_10 = [7.0, 8.0];
        m2_11 = [9.0, 10.0];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0.5, 0.7];
        m3_5 = [1.0, 1.2];
        m3_6 = [1.5, 1.7];
        m3_7 = [2.3, 2.8];
        m3_8 = [3.6, 4.6];
        m3_9 = [5.2, 6.0];
        m3_10 = [7.0, 8.0];
        m3_11 = [9.0, 10.0];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [1.5, 1.7];
        m4_7 = [2.3, 2.8];
        m4_8 = [3.6, 4.6];
        m4_9 = [5.2, 6.0];
        m4_10 = [7.0, 8.0];
        m4_11 = [9.0, 10.0];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [7.0, 8.0];
        m5_11 = [9.0, 10.0];
    }
    if (minus_type == 12) {
        var classS = 'sintez_float_2';//Время применения умений
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [1.0, 1.1];
        m1_4 = [1.2, 1.3];
        m1_5 = [1.4, 1.5];
        m1_6 = [1.6, 1.7];
        m1_7 = [1.9, 2.0];
        m1_8 = [2.3, 2.5];
        m1_9 = [2.7, 2.9];
        m1_10 = [3.2, 3.5];
        m1_11 = [3.8, 4.2];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [1.0, 1.1];
        m2_4 = [1.2, 1.3];
        m2_5 = [1.4, 1.5];
        m2_6 = [1.6, 1.7];
        m2_7 = [1.9, 2.0];
        m2_8 = [2.3, 2.5];
        m2_9 = [2.7, 2.9];
        m2_10 = [3.2, 3.5];
        m2_11 = [3.8, 4.2];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [1.2, 1.3];
        m3_5 = [1.4, 1.5];
        m3_6 = [1.6, 1.7];
        m3_7 = [1.9, 2.0];
        m3_8 = [2.3, 2.5];
        m3_9 = [2.7, 2.9];
        m3_10 = [3.2, 3.5];
        m3_11 = [3.8, 4.2];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [1.6, 1.7];
        m4_7 = [1.9, 2.0];
        m4_8 = [2.3, 2.5];
        m4_9 = [2.7, 2.9];
        m4_10 = [3.2, 3.5];
        m4_11 = [3.8, 4.2];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [3.2, 3.5];
        m5_11 = [3.8, 4.2];
    }
    if (minus_type == 13) {
        var classS = 'sintez_float_2';//Урон в ближнем бою со спины
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0.1, 0.4];
        m1_4 = [0.7, 1.0];
        m1_5 = [1.3, 1.6];
        m1_6 = [1.9, 2.2];
        m1_7 = [2.2, 2.3];
        m1_8 = [2.9, 3.5];
        m1_9 = [4.1, 4.7];
        m1_10 = [5.5, 6.3];
        m1_11 = [6.8, 7.6];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0.1, 0.4];
        m2_4 = [0.7, 1.0];
        m2_5 = [1.3, 1.6];
        m2_6 = [1.9, 2.2];
        m2_7 = [2.2, 2.3];
        m2_8 = [2.9, 3.5];
        m2_9 = [4.1, 4.7];
        m2_10 = [5.5, 6.3];
        m2_11 = [6.8, 7.6];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0.7, 1.0];
        m3_5 = [1.3, 1.6];
        m3_6 = [1.9, 2.2];
        m3_7 = [2.2, 2.3];
        m3_8 = [2.9, 3.5];
        m3_9 = [4.1, 4.7];
        m3_10 = [5.5, 6.3];
        m3_11 = [6.8, 7.6];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [1.9, 2.2];
        m4_7 = [2.2, 2.3];
        m4_8 = [2.9, 3.5];
        m4_9 = [4.1, 4.7];
        m4_10 = [5.5, 6.3];
        m4_11 = [6.8, 7.6];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [5.5, 6.3];
        m5_11 = [6.8, 7.6];
    }
    if (minus_type == 14) {
        var classS = 'sintez_int2';//устойчивость к крит. урону
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [150, 180];
        m1_5 = [210, 240];
        m1_6 = [270, 300];
        m1_7 = [340, 380];
        m1_8 = [430, 480];
        m1_9 = [530, 580];
        m1_10 = [640, 700];
        m1_11 = [760, 835];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [150, 180];
        m2_5 = [210, 240];
        m2_6 = [270, 300];
        m2_7 = [340, 380];
        m2_8 = [430, 480];
        m2_9 = [530, 580];
        m2_10 = [640, 700];
        m2_11 = [760, 835];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [150, 180];
        m3_5 = [210, 240];
        m3_6 = [270, 300];
        m3_7 = [340, 380];
        m3_8 = [430, 480];
        m3_9 = [530, 580];
        m3_10 = [640, 700];
        m3_11 = [760, 835];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [270, 300];
        m4_7 = [340, 380];
        m4_8 = [430, 480];
        m4_9 = [530, 580];
        m4_10 = [640, 700];
        m4_11 = [760, 835];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [640, 700];
        m5_11 = [760, 835];
    }
    if (minus_type == 15) {
        var classS = 'sintez_int2';//такт
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [200, 230];
        m1_5 = [260, 290];
        m1_6 = [320, 350];
        m1_7 = [390, 430];
        m1_8 = [480, 530];
        m1_9 = [580, 630];
        m1_10 = [690, 750];
        m1_11 = [810, 885];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [200, 230];
        m2_5 = [260, 290];
        m2_6 = [320, 350];
        m2_7 = [390, 430];
        m2_8 = [480, 530];
        m2_9 = [580, 630];
        m2_10 = [690, 750];
        m2_11 = [810, 885];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [200, 230];
        m3_5 = [260, 290];
        m3_6 = [320, 350];
        m3_7 = [390, 430];
        m3_8 = [480, 530];
        m3_9 = [580, 630];
        m3_10 = [690, 750];
        m3_11 = [810, 885];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [320, 350];
        m4_7 = [390, 430];
        m4_8 = [480, 530];
        m4_9 = [580, 630];
        m4_10 = [690, 750];
        m4_11 = [810, 885];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [690, 750];
        m5_11 = [810, 885];
    }
    if (minus_type == 16) {
        var classS = 'sintez_int2';//устойчивость к атакам в PvP
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [80, 85];
        m1_5 = [90, 95];
        m1_6 = [100, 105];
        m1_7 = [115, 125];
        m1_8 = [140, 155];
        m1_9 = [170, 185];
        m1_10 = [205, 225];
        m1_11 = [245, 270];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [80, 85];
        m2_5 = [90, 95];
        m2_6 = [100, 105];
        m2_7 = [115, 125];
        m2_8 = [140, 155];
        m2_9 = [170, 185];
        m2_10 = [205, 225];
        m2_11 = [245, 270];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [80, 85];
        m3_5 = [90, 95];
        m3_6 = [100, 105];
        m3_7 = [115, 125];
        m3_8 = [140, 155];
        m3_9 = [170, 185];
        m3_10 = [205, 225];
        m3_11 = [245, 270];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [100, 105];
        m4_7 = [115, 125];
        m4_8 = [140, 155];
        m4_9 = [170, 185];
        m4_10 = [205, 225];
        m4_11 = [245, 270];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [205, 225];
        m5_11 = [245, 270];
    }
    if (minus_type == 17 || minus_type == 18) {
        var classS = 'sintez_int2';//пробив брони
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [105, 125];
        m1_5 = [145, 165];
        m1_6 = [185, 205];
        m1_7 = [235, 265];
        m1_8 = [305, 345];
        m1_9 = [385, 425];
        m1_10 = [475, 525];
        m1_11 = [575, 635];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [105, 125];
        m2_5 = [145, 165];
        m2_6 = [185, 205];
        m2_7 = [235, 265];
        m2_8 = [305, 345];
        m2_9 = [385, 425];
        m2_10 = [475, 525];
        m2_11 = [575, 635];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [105, 125];
        m3_5 = [145, 165];
        m3_6 = [185, 205];
        m3_7 = [235, 265];
        m3_8 = [305, 345];
        m3_9 = [385, 425];
        m3_10 = [475, 525];
        m3_11 = [575, 635];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [185, 205];
        m4_7 = [235, 265];
        m4_8 = [305, 345];
        m4_9 = [385, 425];
        m4_10 = [475, 525];
        m4_11 = [575, 635];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [475, 525];
        m5_11 = [575, 635];
    }
    if (minus_type == 19) {
        var classS = 'sintez_float_2';//скорость передвижения
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [1.0, 1.1];
        m1_6 = [1.2, 1.3];
        m1_7 = [1.5, 1.7];
        m1_8 = [2.0, 2.3];
        m1_9 = [2.6, 2.9];
        m1_10 = [3.3, 3.7];
        m1_11 = [4.1, 4.6];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [1.0, 1.1];
        m2_6 = [1.2, 1.3];
        m2_7 = [1.5, 1.7];
        m2_8 = [2.0, 2.3];
        m2_9 = [2.6, 2.9];
        m2_10 = [3.3, 3.7];
        m2_11 = [4.1, 4.6];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [1.0, 1.1];
        m3_6 = [1.2, 1.3];
        m3_7 = [1.5, 1.7];
        m3_8 = [2.0, 2.3];
        m3_9 = [2.6, 2.9];
        m3_10 = [3.3, 3.7];
        m3_11 = [4.1, 4.6];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [1.2, 1.3];
        m4_7 = [1.5, 1.7];
        m4_8 = [2.0, 2.3];
        m4_9 = [2.6, 2.9];
        m4_10 = [3.3, 3.7];
        m4_11 = [4.1, 4.6];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [3.3, 3.7];
        m5_11 = [4.1, 4.6];
    }
    if (minus_type == 20 || minus_type == 21 || minus_type == 22 || minus_type == 23) {
        var classS = 'sintez_float';//сила атаки
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [9.5, 10.0];
        m1_6 = [10.5, 11.0];
        m1_7 = [13.0, 15.0];
        m1_8 = [18.0, 21.0];
        m1_9 = [24.0, 27.0];
        m1_10 = [31.0, 35.0];
        m1_11 = [39.0, 44.0];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [9.5, 10.0];
        m2_6 = [10.5, 11.0];
        m2_7 = [13.0, 15.0];
        m2_8 = [18.0, 21.0];
        m2_9 = [24.0, 27.0];
        m2_10 = [31.0, 35.0];
        m2_11 = [39.0, 44.0];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [9.5, 10.0];
        m3_6 = [10.5, 11.0];
        m3_7 = [13.0, 15.0];
        m3_8 = [18.0, 21.0];
        m3_9 = [24.0, 27.0];
        m3_10 = [31.0, 35.0];
        m3_11 = [39.0, 44.0];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [10.5, 11.0];
        m4_7 = [13.0, 15.0];
        m4_8 = [18.0, 21.0];
        m4_9 = [24.0, 27.0];
        m4_10 = [31.0, 35.0];
        m4_11 = [39.0, 44.0];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [31.0, 35.0];
        m5_11 = [39.0, 44.0];
    }
    if (minus_type == 24) {
        var classS = 'sintez_float';//дальн обнаруж.
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [10.0, 10.0];
        m1_6 = [10.0, 11.0];
        m1_7 = [11.0, 12.0];
        m1_8 = [13.0, 14.0];
        m1_9 = [15.0, 16.0];
        m1_10 = [18.0, 20.0];
        m1_11 = [22.0, 25.0];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [10.0, 10.0];
        m2_6 = [10.0, 11.0];
        m2_7 = [11.0, 12.0];
        m2_8 = [13.0, 14.0];
        m2_9 = [15.0, 16.0];
        m2_10 = [18.0, 20.0];
        m2_11 = [22.0, 25.0];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [10.0, 10.0];
        m3_6 = [10.0, 11.0];
        m3_7 = [11.0, 12.0];
        m3_8 = [13.0, 14.0];
        m3_9 = [15.0, 16.0];
        m3_10 = [18.0, 20.0];
        m3_11 = [22.0, 25.0];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [10.0, 11.0];
        m4_7 = [11.0, 12.0];
        m4_8 = [13.0, 14.0];
        m4_9 = [15.0, 16.0];
        m4_10 = [18.0, 20.0];
        m4_11 = [22.0, 25.0];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [18.0, 20.0];
        m5_11 = [22.0, 25.0];
    }
    if (minus_type == 25 || minus_type == 27) {
        var classS = 'sintez_float_2';//уклон парир
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0.5, 0.6];
        m1_6 = [0.7, 0.8];
        m1_7 = [0.9, 1.0];
        m1_8 = [1.2, 1.4];
        m1_9 = [1.6, 1.8];
        m1_10 = [2.1, 2.4];
        m1_11 = [2.7, 3.1];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0.5, 0.6];
        m2_6 = [0.7, 0.8];
        m2_7 = [0.9, 1.0];
        m2_8 = [1.2, 1.4];
        m2_9 = [1.6, 1.8];
        m2_10 = [2.1, 2.4];
        m2_11 = [2.7, 3.1];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0.5, 0.6];
        m3_6 = [0.7, 0.8];
        m3_7 = [0.9, 1.0];
        m3_8 = [1.2, 1.4];
        m3_9 = [1.6, 1.8];
        m3_10 = [2.1, 2.4];
        m3_11 = [2.7, 3.1];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [0.7, 0.8];
        m4_7 = [0.9, 1.0];
        m4_8 = [1.2, 1.4];
        m4_9 = [1.6, 1.8];
        m4_10 = [2.1, 2.4];
        m4_11 = [2.7, 3.1];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [2.1, 2.4];
        m5_11 = [2.7, 3.1];
    }
    if (minus_type == 26) {
        var classS = 'sintez_float_2';//блокир
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0, 0];
        m1_6 = [0.4, 0.5];
        m1_7 = [0.6, 0.7];
        m1_8 = [0.8, 1.0];
        m1_9 = [1.1, 1.3];
        m1_10 = [1.5, 1.7];
        m1_11 = [1.9, 2.1];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0, 0];
        m2_6 = [0.4, 0.5];
        m2_7 = [0.6, 0.7];
        m2_8 = [0.8, 1.0];
        m2_9 = [1.1, 1.3];
        m2_10 = [1.5, 1.7];
        m2_11 = [1.9, 2.1];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0, 0];
        m3_6 = [0.4, 0.5];
        m3_7 = [0.6, 0.7];
        m3_8 = [0.8, 1.0];
        m3_9 = [1.1, 1.3];
        m3_10 = [1.5, 1.7];
        m3_11 = [1.9, 2.1];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [0.4, 0.5];
        m4_7 = [0.6, 0.7];
        m4_8 = [0.8, 1.0];
        m4_9 = [1.1, 1.3];
        m4_10 = [1.5, 1.7];
        m4_11 = [1.9, 2.1];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [1.5, 1.7];
        m5_11 = [1.9, 2.1];
    }
    if (minus_type == 28 || minus_type == 29 || minus_type == 30 || minus_type == 31) {
        var classS = 'sintez_float';//крит урон.
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0, 0];
        m1_6 = [9.0, 10.0];
        m1_7 = [12.0, 14.0];
        m1_8 = [17.0, 20.0];
        m1_9 = [23.0, 26.0];
        m1_10 = [29.6, 33.2];
        m1_11 = [37.6, 43.2];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0, 0];
        m2_6 = [9.0, 10.0];
        m2_7 = [12.0, 14.0];
        m2_8 = [17.0, 20.0];
        m2_9 = [23.0, 26.0];
        m2_10 = [29.6, 33.2];
        m2_11 = [37.6, 43.2];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0, 0];
        m3_6 = [9.0, 10.0];
        m3_7 = [12.0, 14.0];
        m3_8 = [17.0, 20.0];
        m3_9 = [23.0, 26.0];
        m3_10 = [29.6, 33.2];
        m3_11 = [37.6, 43.2];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [9.0, 10.0];
        m4_7 = [12.0, 14.0];
        m4_8 = [17.0, 20.0];
        m4_9 = [23.0, 26.0];
        m4_10 = [29.6, 33.2];
        m4_11 = [37.6, 43.2];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [29.6, 33.2];
        m5_11 = [37.6, 43.2];
    }
    if (minus_type == 32 || minus_type == 33 || minus_type == 34 || minus_type == 35) {
        var classS = 'sintez_float_2';//доп. урон.
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0, 0];
        m1_6 = [0, 0];
        m1_7 = [0.3, 0.5];
        m1_8 = [0.8, 1.1];
        m1_9 = [1.4, 1.7];
        m1_10 = [2.1, 2.5];
        m1_11 = [2.9, 3.4];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0, 0];
        m2_6 = [0, 0];
        m2_7 = [0.3, 0.5];
        m2_8 = [0.8, 1.1];
        m2_9 = [1.4, 1.7];
        m2_10 = [2.1, 2.5];
        m2_11 = [2.9, 3.4];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0, 0];
        m3_6 = [0, 0];
        m3_7 = [0.3, 0.5];
        m3_8 = [0.8, 1.1];
        m3_9 = [1.4, 1.7];
        m3_10 = [2.1, 2.5];
        m3_11 = [2.9, 3.4];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [0, 0];
        m4_7 = [0.3, 0.5];
        m4_8 = [0.8, 1.1];
        m4_9 = [1.4, 1.7];
        m4_10 = [2.1, 2.5];
        m4_11 = [2.9, 3.4];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [2.1, 2.5];
        m5_11 = [2.9, 3.4];
    }
    if (minus_type == 36) {
        var classS = 'sintez_float_2';//получаемый урон
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0, 0];
        m1_6 = [0, 0];
        m1_7 = [0, 0];
        m1_8 = [0.3, 0.4];
        m1_9 = [0.7, 1.0];
        m1_10 = [1.6, 2.1];
        m1_11 = [2.6, 3.2];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0, 0];
        m2_6 = [0, 0];
        m2_7 = [0, 0];
        m2_8 = [0.3, 0.4];
        m2_9 = [0.7, 1.0];
        m2_10 = [1.6, 2.1];
        m2_11 = [2.6, 3.2];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0, 0];
        m3_6 = [0, 0];
        m3_7 = [0, 0];
        m3_8 = [0.3, 0.4];
        m3_9 = [0.7, 1.0];
        m3_10 = [1.6, 2.1];
        m3_11 = [2.6, 3.2];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [0, 0];
        m4_7 = [0, 0];
        m4_8 = [0.3, 0.4];
        m4_9 = [0.7, 1.0];
        m4_10 = [1.6, 2.1];
        m4_11 = [2.6, 3.2];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [1.6, 2.1];
        m5_11 = [2.6, 3.2];
    }
    if (minus_type == 37 || minus_type == 38 || minus_type == 39 || minus_type == 40) {
        var classS = 'sintez_float_2';//шанс крита.
        m1_1 = [0, 0];
        m1_2 = [0, 0];
        m1_3 = [0, 0];
        m1_4 = [0, 0];
        m1_5 = [0, 0];
        m1_6 = [0, 0];
        m1_7 = [0, 0];
        m1_8 = [1.4, 1.6];
        m1_9 = [1.8, 2.0];
        m1_10 = [2.6, 3.1];
        m1_11 = [4.0, 5.0];
        m2_1 = [0, 0];
        m2_2 = [0, 0];
        m2_3 = [0, 0];
        m2_4 = [0, 0];
        m2_5 = [0, 0];
        m2_6 = [0, 0];
        m2_7 = [0, 0];
        m2_8 = [1.4, 1.6];
        m2_9 = [1.8, 2.0];
        m2_10 = [2.6, 3.1];
        m2_11 = [4.0, 5.0];
        m3_1 = [0, 0];
        m3_2 = [0, 0];
        m3_3 = [0, 0];
        m3_4 = [0, 0];
        m3_5 = [0, 0];
        m3_6 = [0, 0];
        m3_7 = [0, 0];
        m3_8 = [1.4, 1.6];
        m3_9 = [1.8, 2.0];
        m3_10 = [2.6, 3.1];
        m3_11 = [4.0, 5.0];
        m4_1 = [0, 0];
        m4_2 = [0, 0];
        m4_3 = [0, 0];
        m4_4 = [0, 0];
        m4_5 = [0, 0];
        m4_6 = [0, 0];
        m4_7 = [0, 0];
        m4_8 = [1.4, 1.6];
        m4_9 = [1.8, 2.0];
        m4_10 = [2.6, 3.1];
        m4_11 = [4.0, 5.0];
        m5_1 = [0, 0];
        m5_2 = [0, 0];
        m5_3 = [0, 0];
        m5_4 = [0, 0];
        m5_5 = [0, 0];
        m5_6 = [0, 0];
        m5_7 = [0, 0];
        m5_8 = [0, 0];
        m5_9 = [0, 0];
        m5_10 = [2.6, 3.1];
        m5_11 = [4.0, 5.0];
    }

    var stat_arr = [];


    stat_arr[1] = [m1_1, m1_1, m1_2, m1_3, m1_4, m1_5, m1_6, m1_7, m1_8, m1_9, m1_10, m1_11];
    stat_arr[2] = [m2_1, m2_1, m2_2, m2_3, m2_4, m2_5, m2_6, m2_7, m2_8, m2_9, m2_10, m2_11];
    stat_arr[3] = [m3_1, m3_1, m3_2, m3_3, m3_4, m3_5, m3_6, m3_7, m3_8, m3_9, m3_10, m3_11];
    stat_arr[4] = [m4_1, m4_1, m4_2, m4_3, m4_4, m4_5, m4_6, m4_7, m4_8, m4_9, m4_10, m4_11];
    stat_arr[5] = [m5_1, m5_1, m5_2, m5_3, m5_4, m5_5, m5_6, m5_7, m5_8, m5_9, m5_10, m5_11];


    var intoo_field = "<input id='field_" + id + "' class='" + classS + "' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px' onfocus='CheckS()' onchange='CheckNum(" + id + "," + stat_arr[id][s_grade][0] + "," + stat_arr[id][s_grade][1] + ")'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:110px;'>(" + stat_arr[id][s_grade][0] + " - " + stat_arr[id][s_grade][1] + ")</div>";

    $('#field_' + id + '_up').html(intoo_field);
}


function CheckTypes(id, s_grade, max_grade) {
    var minus_type = $('#cat_' + id + ' :selected').val();
    if (id == 1) {
        $('#cat_2 [value=' + minus_type + ']').remove();
        $('#cat_3 [value=' + minus_type + ']').remove();
    }
    if (id == 2) {
        $('#cat_3 [value=' + minus_type + ']').remove();
        $('#cat_1 [value=' + minus_type + ']').remove();
    }
    if (id == 3) {
        $('#cat_2 [value=' + minus_type + ']').remove();
        $('#cat_1 [value=' + minus_type + ']').remove();
    }

    var c1_1 = [1, 5];
    var c2_1 = [0, 0];
    var c3_1 = [0, 0];
    var s1_1 = [];
    var s2_1 = [0, 0];
    var s3_1 = [0, 0];
    var c1_2 = [6, 10];
    var c2_2 = [0, 0];
    var c3_2 = [0, 0];
    var s1_2 = [];
    var s2_2 = [0, 0];
    var s3_2 = [0, 0];
    var c1_3 = [11, 15];
    var c2_3 = [0, 0];
    var c3_3 = [0, 0];
    var s1_3 = [];
    var s2_3 = [0, 0];
    var s3_3 = [0, 0];
    var c1_4 = [16, 20];
    var c2_4 = [0, 0];
    var c3_4 = [0, 0];
    var s1_4 = [];
    var s2_4 = [0, 0];
    var s3_4 = [0, 0];
    var c1_5 = [21, 29];
    var c2_5 = [12, 17];
    var c3_5 = [0, 0];
    var s1_5 = [];
    var s2_5 = [11, 20];
    var s3_5 = [0, 0];
    var c1_6 = [30, 35];
    var c2_6 = [18, 23];
    var c3_6 = [0, 0];
    var s1_6 = [];
    var s2_6 = [21, 30];
    var s3_6 = [0, 0];
    var c1_7 = [36, 41];
    var c2_7 = [24, 29];
    var c3_7 = [0, 0];
    var s1_7 = [];
    var s2_7 = [31, 40];
    var s3_7 = [0, 0];
    var c1_8 = [42, 47];
    var c2_8 = [30, 35];
    var c3_8 = [30, 35];
    var s1_8 = [];
    var s2_8 = [41, 50];
    var s3_8 = [41, 50];
    var s1_9 = [];
    var s2_9 = [51, 60];
    var s3_9 = [51, 60];
    var l1_1 = [];
    var l2_1 = [];
    var l3_1 = [];
    var l1_2 = [];
    var l2_2 = [];
    var l3_2 = [];
    var l1_3 = [];
    var l2_3 = [];
    var l3_3 = [];
    var l1_4 = [];
    var l2_4 = [];
    var l3_4 = [];
    var l1_5 = [];
    var l2_5 = [];
    var l3_5 = [];
    var l1_6 = [];
    var l2_6 = [];
    var l3_6 = [];
    var l1_7 = [];
    var l2_7 = [];
    var l3_7 = [];
    var l1_8 = [];
    var l2_8 = [];
    var l3_8 = [];
    var l1_9 = [];
    var l2_9 = [];
    var l3_9 = [];
    var l1_10 = [];
    var l2_10 = [];
    var l3_10 = [];

    if (minus_type == 1 || minus_type == 2 || minus_type == 3 || minus_type == 4 || minus_type == 5) {
        var classS = 'sintez_int';
        s1_1 = [0, 0];
        s1_2 = [0, 0];
        s1_3 = [0, 0];
        s1_4 = [1, 10];
        s1_5 = [11, 20];
        s1_6 = [21, 30];
        s1_7 = [31, 40];
        s1_8 = [41, 50];
        s1_9 = [51, 60];
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [1, 8];
        l1_5 = [8, 23];
        l1_6 = [21, 38];
        l1_7 = [33, 53];
        l1_8 = [46, 68];
        l1_9 = [59, 83];
        l1_10 = [72, 98];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [8, 23];
        l2_6 = [21, 38];
        l2_7 = [33, 53];
        l2_8 = [46, 68];
        l2_9 = [59, 83];
        l2_10 = [72, 98];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [46, 68];
        l3_9 = [59, 83];
        l3_10 = [72, 98];
    }
    if (minus_type == 6 || minus_type == 7 || minus_type == 8 || minus_type == 9) {
        var classS = 'sintez_float';
        s1_1 = [0.2, 2.0];
        s1_2 = [0.2, 2.0];
        s1_3 = [2.0, 4.0];
        s1_4 = [4.0, 6.0];
        s1_5 = [6.0, 8.0];
        s1_6 = [8.0, 10.0];
        s1_7 = [10.0, 12.0];
        s1_8 = [12.0, 14.0];
        s1_9 = [14.0, 16.0];
        l1_1 = [0.0, 0.0];
        l1_2 = [0.0, 0.0];
        l1_3 = [4.8, 6.4];
        l1_4 = [6.6, 8.2];
        l1_5 = [8.4, 10.0];
        l1_6 = [10.2, 11.8];
        l1_7 = [12.0, 13.6];
        l1_8 = [13.8, 15.4];
        l1_9 = [15.6, 17.2];
        l1_10 = [17.4, 19.0];
    }
    if (minus_type == 10 || minus_type == 11) {
        var classS = 'sintez_int2';
        s1_1 = [10, 50];
        s1_2 = [10, 50];
        s1_3 = [50, 80];
        s1_4 = [80, 120];
        s1_5 = [120, 170];
        s1_6 = [170, 200];
        s1_7 = [200, 250];
        s1_8 = [250, 290];
        s1_9 = [290, 320];
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [90, 118];
        l1_4 = [128, 156];
        l1_5 = [166, 194];
        l1_6 = [204, 232];
        l1_7 = [242, 270];
        l1_8 = [280, 308];
        l1_9 = [318, 346];
        l1_10 = [356, 385];
    }
    if (minus_type == 12 || minus_type == 13) {
        var classS = 'sintez_int2';
        s1_1 = [20, 180];
        s1_2 = [20, 180];
        s1_3 = [180, 340];
        s1_4 = [350, 500];
        s1_5 = [500, 660];
        s1_6 = [660, 820];
        s1_7 = [820, 980];
        s1_8 = [980, 1140];
        s1_9 = [1140, 1280];
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [320, 450];
        l1_4 = [470, 600];
        l1_5 = [620, 750];
        l1_6 = [770, 900];
        l1_7 = [920, 1050];
        l1_8 = [1070, 1200];
        l1_9 = [1220, 1350];
        l1_10 = [1369, 1500];
    }
    if (minus_type == 14) {
        var classS = 'sintez_float';
        s1_1 = [0.2, 1.2];
        s1_2 = [0.2, 1.2];
        s1_3 = [1.2, 2.4];
        s1_4 = [2.4, 3.6];
        s1_5 = [3.6, 4.8];
        s1_6 = [4.8, 6.0];
        s1_7 = [6.0, 7.2];
        s1_8 = [7.2, 8.4];
        s1_9 = [8.4, 9.6];
        l1_1 = [0.0, 0.0];
        l1_2 = [0.0, 0.0];
        l1_3 = [2.6, 3.5];
        l1_4 = [3.7, 4.6];
        l1_5 = [4.8, 5.7];
        l1_6 = [5.9, 6.8];
        l1_7 = [7.0, 7.9];
        l1_8 = [8.1, 9.0];
        l1_9 = [9.2, 10.1];
        l1_10 = [10.3, 11.2];
    }
    if (minus_type == 15) {
        var classS = 'sintez_float';
        s1_1 = [0.8, 8.0];
        s1_2 = [0.8, 8.0];
        s1_3 = [8.0, 16.0];
        s1_4 = [16.0, 24.0];
        s1_5 = [24.0, 32.0];
        s1_6 = [32.0, 40.0];
        s1_7 = [40.0, 48.0];
        s1_8 = [48.0, 56.0];
        s1_9 = [56.0, 64.0];
        l1_1 = [0.0, 0.0];
        l1_2 = [0.0, 0.0];
        l1_3 = [15.9, 22.5];
        l1_4 = [23.4, 30.0];
        l1_5 = [30.9, 37.5];
        l1_6 = [38.4, 45.0];
        l1_7 = [45.9, 52.5];
        l1_8 = [53.4, 60.0];
        l1_9 = [60.9, 67.5];
        l1_10 = [68.4, 75.0];
    }
    if (minus_type == 16) {
        var classS = 'sintez_int2';
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [0, 0];
        l1_5 = [0, 0];
        l1_6 = [0, 0];
        l1_7 = [0, 0];
        l1_8 = [102, 295];
        l1_9 = [237, 480];
        l1_10 = [372, 665];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [0, 0];
        l2_6 = [0, 0];
        l2_7 = [0, 0];
        l2_8 = [102, 295];
        l2_9 = [237, 480];
        l2_10 = [372, 665];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [102, 295];
        l3_9 = [237, 480];
        l3_10 = [372, 665];
    }
    if (minus_type == 17) {
        var classS = 'sintez_float_2';
        l1_1 = [0.0, 0.0];
        l1_2 = [0.0, 0.0];
        l1_3 = [0.0, 0.0];
        l1_4 = [0.0, 0.0];
        l1_5 = [0.0, 0.0];
        l1_6 = [0.0, 0.0];
        l1_7 = [0.0, 0.0];
        l1_8 = [0.7, 3.0];
        l1_9 = [2.5, 5.2];
        l1_10 = [4.3, 7.4];
        l2_1 = [0.0, 0.0];
        l2_2 = [0.0, 0.0];
        l2_3 = [0.0, 0.0];
        l2_4 = [0.0, 0.0];
        l2_5 = [0.0, 0.0];
        l2_6 = [0.0, 0.0];
        l2_7 = [0.0, 0.0];
        l2_8 = [0.7, 3.0];
        l2_9 = [2.5, 5.2];
        l2_10 = [4.3, 7.4];
        l3_1 = [0.0, 0.0];
        l3_2 = [0.0, 0.0];
        l3_3 = [0.0, 0.0];
        l3_4 = [0.0, 0.0];
        l3_5 = [0.0, 0.0];
        l3_6 = [0.0, 0.0];
        l3_7 = [0.0, 0.0];
        l3_8 = [0.7, 3.0];
        l3_9 = [2.5, 5.2];
        l3_10 = [4.3, 7.4];
    }
    if (minus_type == 18 || minus_type == 19) {
        var classS = 'sintez_int2';
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [0, 0];
        l1_5 = [0, 0];
        l1_6 = [0, 0];
        l1_7 = [0, 0];
        l1_8 = [1, 2];
        l1_9 = [3, 4];
        l1_10 = [5, 6];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [0, 0];
        l2_6 = [0, 0];
        l2_7 = [0, 0];
        l2_8 = [1, 2];
        l2_9 = [3, 4];
        l2_10 = [5, 6];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [1, 2];
        l3_9 = [3, 4];
        l3_10 = [5, 6];
    }
    if (minus_type == 20 || minus_type == 21 || minus_type == 22) {
        var classS = 'sintez_int2';
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [0, 0];
        l1_5 = [0, 0];
        l1_6 = [0, 0];
        l1_7 = [0, 0];
        l1_8 = [2, 8];
        l1_9 = [9, 16];
        l1_10 = [15, 24];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [0, 0];
        l2_6 = [0, 0];
        l2_7 = [0, 0];
        l2_8 = [2, 8];
        l2_9 = [9, 16];
        l2_10 = [15, 24];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [2, 8];
        l3_9 = [9, 16];
        l3_10 = [15, 24];
    }
    if (minus_type == 23) {
        var classS = 'sintez_int2';
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [0, 0];
        l1_5 = [0, 0];
        l1_6 = [0, 0];
        l1_7 = [0, 0];
        l1_8 = [23, 89];
        l1_9 = [99, 178];
        l1_10 = [174, 268];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [0, 0];
        l2_6 = [0, 0];
        l2_7 = [0, 0];
        l2_8 = [23, 89];
        l2_9 = [99, 178];
        l2_10 = [174, 268];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [23, 89];
        l3_9 = [99, 178];
        l3_10 = [174, 268];
    }
    if (minus_type == 24) {
        var classS = 'sintez_int2';
        l1_1 = [0, 0];
        l1_2 = [0, 0];
        l1_3 = [0, 0];
        l1_4 = [0, 0];
        l1_5 = [0, 0];
        l1_6 = [0, 0];
        l1_7 = [0, 0];
        l1_8 = [22, 85];
        l1_9 = [94, 170];
        l1_10 = [167, 256];
        l2_1 = [0, 0];
        l2_2 = [0, 0];
        l2_3 = [0, 0];
        l2_4 = [0, 0];
        l2_5 = [0, 0];
        l2_6 = [0, 0];
        l2_7 = [0, 0];
        l2_8 = [22, 85];
        l2_9 = [94, 170];
        l2_10 = [167, 256];
        l3_1 = [0, 0];
        l3_2 = [0, 0];
        l3_3 = [0, 0];
        l3_4 = [0, 0];
        l3_5 = [0, 0];
        l3_6 = [0, 0];
        l3_7 = [0, 0];
        l3_8 = [22, 85];
        l3_9 = [94, 170];
        l3_10 = [167, 256];
    }

    var stat_arr = [];


    if (max_grade == 'c') {
        stat_arr[1] = [c1_1, c1_1, c1_2, c1_3, c1_4, c1_5, c1_6, c1_7, c1_8];
        stat_arr[2] = [c2_1, c2_1, c2_2, c2_3, c2_4, c2_5, c2_6, c2_7, c2_8];
        stat_arr[3] = [c3_1, c3_1, c3_2, c3_3, c3_4, c3_5, c3_6, c3_7, c3_8];
    }
    if (max_grade == 's') {
        stat_arr[1] = [s1_1, s1_1, s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9];
        stat_arr[2] = [s2_1, s2_1, s2_2, s2_3, s2_4, s2_5, s2_6, s2_7, s2_8, s2_9];
        stat_arr[3] = [s3_1, s3_1, s3_2, s3_3, s3_4, s3_5, s3_6, s3_7, s3_8, s3_9];
    }
    if (max_grade == 'l') {
        stat_arr[1] = [l1_1, l1_1, l1_2, l1_3, l1_4, l1_5, l1_6, l1_7, l1_8, l1_9, l1_10];
        stat_arr[2] = [l2_1, l2_1, l2_2, l2_3, l2_4, l2_5, l2_6, l2_7, l2_8, l2_9, l2_10];
        stat_arr[3] = [l3_1, l3_1, l3_2, l3_3, l3_4, l3_5, l3_6, l3_7, l3_8, l3_9, l3_10];
    }


    var intoo_field = "<input id='field_" + id + "' class='" + classS + "' type='text' style='background-color:#e6dcc1;color:#755119;border: none; width:50px; height:17px' onfocus='CheckS()' onchange='CheckNum(" + id + "," + stat_arr[id][s_grade][0] + "," + stat_arr[id][s_grade][1] + ")'><div style='position:absolute; margin-left:65px;margin-top:-20px;width:110px;'>(" + stat_arr[id][s_grade][0] + " - " + stat_arr[id][s_grade][1] + ")</div>";

    $('#field_' + id + '_up').html(intoo_field);
}

function change_GS(slot) {
    var base_gs = $('#slot_number_' + slot + ' #slot' + slot + '_lvl').val();
    var runs_gs = $('#slot_number_' + slot + ' #slot' + slot + '_roons_lvl').val();
    var gravs_gs1 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_1_lvl').val();
    var gravs_gs2 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_2_lvl').val();
    var gravs_gs3 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_3_lvl').val();
    var gravs_gs4 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_4_lvl').val();
    var gravs_gs5 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_5_lvl').val();
    var gravs_gs6 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_6_lvl').val();
    var gravs_gs7 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_7_lvl').val();
    var gs_d_arr = [Number(runs_gs), Number(gravs_gs1), Number(gravs_gs2), Number(gravs_gs3), Number(gravs_gs4), Number(gravs_gs5), Number(gravs_gs6), Number(gravs_gs7)];
    var gs_d = 0;
    for (var i = 0; i < 8; i++) {
        if (Number(gs_d_arr[i]) > 0) {
            gs_d += Number(gs_d_arr[i]);
        }
    }
    var gear_score = '<a style="color:#949293">Рейтинг экипировки (предмет + улучшения)</a><br />' + ((Number(base_gs) + 0.0001 + Number(gs_d)) / 100).toFixed(1) + ' (' + ((Number(base_gs) + 0.0001) / 100).toFixed(1) + ' + ' + Number((gs_d) / 100).toFixed(1) + ')<div id="line"></div>';
    $('.editor #gear_score').html(gear_score);
}

function showTitle(name, buff_id) {

    $.ajax({
        type: 'POST',
        url: 'inc2/showtitle.php',
        data: 'name=' + name + '&buff_id=' + buff_id,

        success: function (data) {
            $("#title_showinfo").html(data);
        }
    });
}
function Weartitle(name, buff_id) {

    $.ajax({
        type: 'POST',
        url: 'inc2/tooltitle.php',
        data: 'name=' + name + '&buff_id=' + buff_id,

        success: function (data) {
            $("#icon_4").html(data);
        }
    });
}

function CloseSet() {

    $('#set_show').css('display', 'none');

}

function CloseSett() {
    $('#sett').css('display', 'none');
    $('#ad2').css('display', 'block');
    $('#ad3').css('display', 'block');
}
function CloseNews() {

    $('#news_show').css('display', 'none');
}
function CloseTitle() {

    $('#title_show').css('display', 'none');

}
function CloseDonat() {

    $('#donat_show').css('display', 'none');
}
function CloseSkill() {

    $('#skill_show').css('display', 'none');
}
function CloseInstr() {

    $('#instr_show').css('display', 'none');
}
function CloseBuff() {

    $('#buff_show').css('display', 'none');
}
function news() {
    var DisplayValue = $('#news_show').css('display');

    if (DisplayValue == 'inline') {
        $('#news_show').css('display', 'none');
    }

    if (DisplayValue == 'none') {
        $('#news_show').css('display', 'inline');
    }
}

function donat() {
    var DisplayValue = $('#donat_show').css('display');

    if (DisplayValue == 'inline') {
        $('#donat_show').css('display', 'none');
    }

    if (DisplayValue == 'none') {
        $('#donat_show').css('display', 'inline');
    }
}

function buff() {
    var DisplayValue = $('#buff_show').css('display');

    if (DisplayValue == 'inline') {
        $('#buff_show').css('display', 'none');
    }

    if (DisplayValue == 'none') {
        $('#buff_show').css('display', 'inline');
    }
}

function title_s() {
    var DisplayValue = $('#title_show').css('display');

    if (DisplayValue == 'inline') {
        $('#title_show').css('display', 'none');

    }

    if (DisplayValue == 'none') {
        $('#title_show').css('display', 'inline');
    }
}

function set_s() {
    var DisplayValue = $('#set_show').css('display');

    if (DisplayValue == 'inline') {
        $('#set_show').css('display', 'none');

    }

    if (DisplayValue == 'none') {
        $('#set_show').css('display', 'inline');
    }
}

function instr() {
    var DisplayValue = $('#instr_show').css('display');

    if (DisplayValue == 'inline') {
        $('#instr_show').css('display', 'none');
    }

    if (DisplayValue == 'none') {
        $('#instr_show').css('display', 'inline');
    }
}

function sett() {
    var DisplayValue = $('#sett').css('display');

    if (DisplayValue == 'inline') {
        $('#sett').css('display', 'none');
        $('#ad2').css('display', 'block');
        $('#ad3').css('display', 'block');
    }

    if (DisplayValue == 'none') {
        $('#ad3').css('display', 'none');
        $('#sett').css('display', 'inline');
        $('#ad2').css('display', 'none');
    }
}
function skill() {
    var DisplayValue = $('#skill_show').css('display');

    if (DisplayValue == 'inline') {
        $('#skill_show').css('display', 'none');
    }

    if (DisplayValue == 'none') {
        $('#skill_show').css('display', 'inline');
    }
}
function clear_title() {
    document.getElementById('icon_4').innerHTML = "";
    document.getElementById('title_id').value = 0;
    document.getElementById('title_name').value = 0;
    document.getElementById('title_buff_ua_sta').value = 0;
    document.getElementById('title_buff_ua_str').value = 0;
    document.getElementById('title_buff_ua_spi').value = 0;
    document.getElementById('title_buff_ua_dex').value = 0;
    document.getElementById('title_buff_ua_int').value = 0;
    document.getElementById('title_buff_ua_sta_proc').value = 0;
    document.getElementById('title_buff_ua_str_proc').value = 0;
    document.getElementById('title_buff_ua_spi_proc').value = 0;
    document.getElementById('title_buff_ua_dex_proc').value = 0;
    document.getElementById('title_buff_ua_int_proc').value = 0;
    document.getElementById('title_buff_ua_max_mana').value = 0;
    document.getElementById('title_buff_ua_max_health').value = 0;
    document.getElementById('title_buff_ua_max_health_proc').value = 0;
    document.getElementById('title_buff_ua_armor').value = 0;
    document.getElementById('title_buff_ua_armor_proc').value = 0;
    document.getElementById('title_buff_ua_magic_resist').value = 0;
    document.getElementById('title_buff_ua_move_speed_mul').value = 0;
    document.getElementById('title_buff_ua_melee_critical_bonus').value = 0;
    document.getElementById('title_buff_ua_ranged_critical_bonus').value = 0;
    document.getElementById('title_buff_ua_spell_critical_bonus').value = 0;
    document.getElementById('title_buff_ua_heal_critical_bonus').value = 0;
    document.getElementById('title_buff_ua_melee_critical_mul').value = 0;
    document.getElementById('title_buff_ua_ranged_critical_mul').value = 0;
    document.getElementById('title_buff_ua_spell_critical_mul').value = 0;
    document.getElementById('title_buff_ua_heal_critical_mul').value = 0;
    document.getElementById('title_buff_ua_heal_mul').value = 0;
    document.getElementById('title_buff_ua_melee_dps_inc').value = 0;
    document.getElementById('title_buff_ua_ranged_dps_inc').value = 0;
    document.getElementById('title_buff_ua_spell_dps_inc').value = 0;
    document.getElementById('title_buff_ua_heal_dps_inc').value = 0;
    document.getElementById('title_buff_ua_melee_damage_mul').value = 0;
    document.getElementById('title_buff_ua_ranged_damage_mul').value = 0;
    document.getElementById('title_buff_ua_spell_damage_mul').value = 0;
    document.getElementById('title_buff_ua_ignore_armor').value = 0;
    document.getElementById('title_buff_ua_magic_penetration').value = 0;
    document.getElementById('title_buff_ua_persistent_health_regen').value = 0;
    document.getElementById('title_buff_ua_persistent_mana_regen').value = 0;
    document.getElementById('title_buff_ua_melee_speed_mul').value = 0;
    document.getElementById('title_buff_ua_incoming_heal').value = 0;
    document.getElementById('title_buff_ua_casting_time_mul').value = 0;
    document.getElementById('title_buff_ua_incoming_damage').value = 0;
    document.getElementById('title_buff_ua_block_mul').value = 0;
    document.getElementById('title_buff_ua_dodge_mul').value = 0;
    document.getElementById('title_buff_ua_melee_parry_mul').value = 0;
    document.getElementById('title_buff_ua_bulls_eye').value = 0;
    Calculate();
    buffset(4);
}


function ef_func(id, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, f_armor_base, m_armor_base, item_dps_base, item_mdps_base, item_hildps_base, slot, grade) {

    if (f_armor_base > 0 && m_armor_base > 0) {

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='change_coob'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div><div style='margin-left:133px;margin-top:50px'><font style='color:#755119'>Защита: </font><font id='fis_armor' style='color:#755119' >" + Math.floor(Number(f_armor_base) + Number(f_armor_base * ef_armor / 100)) + "</font></div><input type='range' oninput='onchangeArmor(" + f_armor_base + ")' id='rangeArmor' min='0' max='15' step='1' value='" + ef_armor + "'/><div style='margin-left:117px;margin-top:55px'><font style='color:#755119'>Сопротивление: </font><font id='mag_armor' style='color:#755119' >" + Math.floor(Number(m_armor_base) + Number(m_armor_base * ef_resist / 100)) + "</font></div><input type='range' oninput='onchangeResist(" + m_armor_base + ")' id='rangeResist' min='0' max='15' step='1' value='" + ef_resist + "'/><div class='button_ef' onClick='changer_ef(" + id + "," + slot + "," + grade + ")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div>";

    }
    if (f_armor_base > 0 && m_armor_base == 0) {

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='change_coob_weapon'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div><div style='margin-left:133px;margin-top:48px'><font style='color:#755119'>Защита: </font><font id='fis_armor' style='color:#755119' >" + Math.floor(Number(f_armor_base) + Number(f_armor_base * ef_armor / 100)) + "</font></div><input type='range' oninput='onchangeArmor(" + f_armor_base + ")' id='rangeArmor' min='0' max='15' step='1' value='" + ef_armor + "'/><div class='button_ef' onClick='changer_ef(" + id + "," + slot + "," + grade + ")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div><div id='rangeAttack' value='0'></div>";

    }

    if (item_dps_base > 0 && item_hildps_base == 0 && item_mdps_base == 0) {

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='change_coob_weapon'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div><div style='margin-left:135px;margin-top:48px'><font style='color:#755119'>Атака: </font><font id='ef_weapon' style='color:#755119' >" + (Number(item_dps_base) + Number(item_dps_base * ef_attack / 100)).toFixed(1) + "</font></div><input type='range' oninput='onchangeWeapon(" + item_dps_base + ")' id='rangeAttack' min='0' max='15' step='1' value='" + ef_attack + "'/><div class='button_ef' onClick='changer_ef(" + id + "," + slot + "," + grade + ")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div>";

    }
    if (item_hildps_base > 0) {

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='change_coob'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div><div style='margin-left:135px;margin-top:50px'><font style='color:#755119'>Атака: </font><font id='ef_weapon' style='color:#755119' >" + (Number(item_dps_base) + Number(item_dps_base * ef_attack / 100)).toFixed(1) + "</font></div><input type='range' oninput='onchangeWeapon(" + item_dps_base + ")' id='rangeAttack' min='0' max='15' step='1' value='" + ef_attack + "'/><div style='margin-left:90px;margin-top:55px'><font style='color:#755119'>Эффективность исцеления: </font><font id='ef_hill' style='color:#755119' >" + Math.floor(Number(item_hildps_base) + Number(item_hildps_base * ef_hill / 100)) + "</font></div><input type='range' oninput='onchangeHill(" + item_hildps_base + ")' id='rangehill' min='0' max='15' step='1' value='" + ef_hill + "'/><div class='button_ef' onClick='changer_ef(" + id + "," + slot + "," + grade + ")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div>";

    }
    if (item_mdps_base > 0) {

        document.getElementById('ef_editor').innerHTML = "<div style='position: absolute;width: 50%;height: 50%;'><div class='change_coob'><div class='close_coob'><img src='images/icon_close1.png' onClick='Close_ef_editor()'></div><div style='margin-left:135px;margin-top:50px'><font style='color:#755119'>Атака: </font><font id='ef_weapon' style='color:#755119' >" + (Number(item_dps_base) + Number(item_dps_base * ef_attack / 100)).toFixed(1) + "</font></div><input type='range' oninput='onchangeWeapon(" + item_dps_base + ")' id='rangeAttack' min='0' max='15' step='1' value='" + ef_attack + "'/><div style='margin-left:110px;margin-top:55px'><font style='color:#755119'>Сила заклинаний: </font><font id='ef_m_attack' style='color:#755119' >" + Math.floor(Number(item_mdps_base) + Number(item_mdps_base * ef_m_attack / 100)) + "</font></div><input type='range' oninput='onchange_m_attack(" + item_mdps_base + ")' id='range_m_attack' min='0' max='15' step='1' value='" + ef_m_attack + "'/><div class='button_ef' onClick='changer_ef(" + id + "," + slot + "," + grade + ")'><div style='margin-top:8px'><font style='margin-left:12px; margin-top:10px; font-size:13px; color:#755119'>Применить</font></div></div></div>";

    }
}

function onchangeArmor(f_armor_base) {

    var result = Math.floor(Number(f_armor_base) + Number(document.getElementById('rangeArmor').value) * Number(f_armor_base) / 100);
    $("#fis_armor").html(result);

}

function onchangeResist(m_armor_base) {

    var result = Math.floor(Number(m_armor_base) + Number(document.getElementById('rangeResist').value) * Number(m_armor_base) / 100);
    $("#mag_armor").html(result);

}

function onchangeWeapon(item_dps_base) {

    var result = (Number(item_dps_base) + Number(document.getElementById('rangeAttack').value) * Number(item_dps_base) / 100).toFixed(1);
    $("#ef_weapon").html(result);

}

function onchangeHill(item_hildps_base) {

    var result = Math.floor(Number(item_hildps_base) + Number(document.getElementById('rangehill').value) * Number(item_hildps_base) / 100);
    $("#ef_hill").html(result);

}

function onchange_m_attack(item_mdps_base) {

    var result = Math.floor(Number(item_mdps_base) + Number(document.getElementById('range_m_attack').value) * Number(item_mdps_base) / 100);
    $("#ef_m_attack").html(result);

}

function WearingSlot(slot) {
    $("#LoadingImage").show();

    $.ajax({
        type: 'POST',
        url: 'inc2/searchitem.php',
        data: 'slot=' + slot + '&lvl=' + document.getElementById("userlvl").value,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor').html(data);
        }
    });
}

function WearingSlot_compar(slot, grade, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack) {
    $("#LoadingImage").show();
    $("div.showtip_changer").css("margin-left", "220px");
    $.ajax({
        type: 'POST',
        url: 'inc2/searchitem_compar.php',
        data: 'slot=' + slot + '&lvl=' + document.getElementById("userlvl").value + '&grade=' + grade + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor_compar').html(data);
        }
    });
}


function ShowRuns(slot, lvl_item, category_id) {
    $("#LoadingImage").show();

    $.ajax({
        type: 'POST',
        url: 'inc2/searchruns.php',
        data: 'slot=' + slot + '&lvl_item=' + lvl_item + '&category_id=' + category_id,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor_runs').html(data);
        }
    });
}

function ShowGravs(slot, lvl_item, category_id, slot_number) {
    $("#LoadingImage").show();

    $.ajax({
        type: 'POST',
        url: 'inc2/searchgravs.php',
        data: 'slot=' + slot + '&lvl_item=' + lvl_item + '&category_id=' + category_id + '&slot_number=' + slot_number,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor_runs').html(data);
        }
    });
}


function WearRuns(id, slot) {

    $("#LoadingImage").show();
    document.getElementById('editor_runs').innerHTML = "";

    $.ajax({
        type: 'POST',
        url: 'inc2/weartipruns.php',
        data: 'itemid=' + id + '&slot=' + slot,

        success: function (data) {

            $("#LoadingImage").hide();
            $('.editor #runs_slot').html(data);

            setTimeout(change_GS(slot), 100);

        }
    });

}

function WearGravs(id, slot, slot_number, num_gravs) {

    $("#LoadingImage").show();
    document.getElementById('editor_runs').innerHTML = "";

    $.ajax({
        type: 'POST',
        url: 'inc2/weartipgravs.php',
        data: 'itemid=' + id + '&slot=' + slot + '&slot_number=' + slot_number + '&num_gravs=' + num_gravs,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor #slot_grav' + slot_number).html(data);

            setTimeout(change_GS(slot), 100);

        }
    });

}

function WearRuns_s(id, slot) {

    $.ajax({
        type: 'POST',
        url: 'inc2/weartipruns.php',
        data: 'itemid=' + id + '&slot=' + slot,

        success: function (data) {

            $('.slot' + slot + ' #runs_slot').html(data);

        }
    });

}

function WearGravs_s(id, slot, slot_number) {

    $.ajax({
        type: 'POST',
        url: 'inc2/weartipgravs.php',
        data: 'itemid=' + id + '&slot=' + slot + '&slot_number=' + slot_number,

        success: function (data) {

            $('#slot' + slot + ' #slot_grav' + slot_number).html(data);

        }
    });

}


var slot_values;

function changer(id, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, slot, grade) {
    $("#LoadingImage").show();

    var runs_changer = $('.slot' + slot + ' #runs_slot').html();
    slot_values = $('#slot_number_' + slot).html();

    var gs_changer = $('.slot' + slot + ' #gear_score').html();

    var grav1_changer = $('.slot' + slot + ' #slot_grav1').html();
    var grav2_changer = $('.slot' + slot + ' #slot_grav2').html();
    var grav3_changer = $('.slot' + slot + ' #slot_grav3').html();
    var grav4_changer = $('.slot' + slot + ' #slot_grav4').html();
    var grav5_changer = $('.slot' + slot + ' #slot_grav5').html();
    var grav6_changer = $('.slot' + slot + ' #slot_grav6').html();
    var grav7_changer = $('.slot' + slot + ' #slot_grav7').html();
    if ($("div").is("#sintez")) {
        var sintez_var = $('.slot' + slot + ' #sintez').html();
    }
    if ($("div").is("#sintez_k")) {
        var sintez_var = $('.slot' + slot + ' #sintez_k').html();
    }


    $.ajax({
        type: 'POST',
        url: 'inc2/changer.php',
        data: 'itemid=' + id + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&slot=' + slot + '&grade=' + grade,
        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor').html(data);
            $('.editor #runs_slot').html(runs_changer);
            if ($("div").is("#sintez")) {
                $('.editor #sintez').html(sintez_var);
            }
            if ($("div").is("#sintez_k")) {
                $('.editor #sintez_k').html(sintez_var);
            }
            $('.editor #slot_grav1').html(grav1_changer)
            $('.editor #slot_grav2').html(grav2_changer)
            $('.editor #slot_grav3').html(grav3_changer)
            $('.editor #slot_grav4').html(grav4_changer)
            $('.editor #slot_grav5').html(grav5_changer)
            $('.editor #slot_grav6').html(grav6_changer)
            $('.editor #slot_grav7').html(grav7_changer)
            $('.editor #gear_score').html(gs_changer);
        }
    });
    CloseEditor_grade();
}


function changer_grade(id, slot, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack) {
    {
        if ($("div").is("#ef_editor")) {
            document.getElementById('ef_editor').innerHTML = "";
        }
    }
    var grade = $('select#ChangeGrade :selected').val();
    $("#LoadingImage").show();

    var runs_changer = $('.editor #runs_slot').html();

    var grav1_changer = $('.editor #slot_grav1').html();
    var grav2_changer = $('.editor #slot_grav2').html();
    var grav3_changer = $('.editor #slot_grav3').html();
    var grav4_changer = $('.editor #slot_grav4').html();
    var grav5_changer = $('.editor #slot_grav5').html();
    var grav6_changer = $('.editor #slot_grav6').html();
    var grav7_changer = $('.editor #slot_grav7').html();

    if ($("div").is(".editor #sintez")) {
        var sintez_var = $('.editor #sintez').html();

        if ($("div").is(".slot" + slot + " #sintez")) {
            var sintezElem = document.getElementById('sintez_buffs');
            var sintezElements = sintezElem.getElementsByTagName('input');
            for (var i = 0, sintezElementslength = sintezElements.length; i < sintezElementslength; i++) {
                sintezElem.getElementsByTagName('input')[i].value = 0;
            }
        }
    }

    if ($("div").is(".editor #sintez_k")) {
        var sintez_var = $('.editor #sintez_k').html();

        if ($("div").is(".slot" + slot + " #sintez_k")) {
            var sintezElem = document.getElementById('sintez_k_buffs');
            var sintezElements = sintezElem.getElementsByTagName('input');
            for (var i = 0, sintezElementslength = sintezElements.length; i < sintezElementslength; i++) {
                sintezElem.getElementsByTagName('input')[i].value = 0;
            }
        }
    }
    $.ajax({
        type: 'POST',
        url: 'inc2/changer.php',
        data: 'itemid=' + id + '&slot=' + slot + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&grade=' + grade,
        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor').html(data);
            $('.editor #runs_slot').html(runs_changer);


            if (slot != 20 && slot != 21) {
                if (slot < 9 || slot > 15) {
                    var gravs_arr = [0, grav1_changer, grav2_changer, grav3_changer, grav4_changer, grav5_changer, grav6_changer, grav7_changer];
                    for (var i = 1; i < 8; i++) {
                        if ($("#slot_grav" + i).parents(".editor").length) {
                            $('.editor #slot_grav' + i).html(gravs_arr[i])
                        }
                        else {
                            document.getElementById('slot' + slot + '_gravs_' + i + '_lvl').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_move_speed_mul').value = 0;
                            document.getElementById('slot' + slot + '_gravs' + i + '_id').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_heal_critical_bonus').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_heal_dps_inc').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_persistent_health_regen').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_persistent_mana_regen').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_casting_time_mul').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_dodge_mul').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_block').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_melee_parry_mul').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_melee_speed_mul2').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_speed_attack').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_speed_attack2').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_melee_critical_bonus').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_ranged_critical_bonus').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_spell_critical_bonus').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_melee_dps_inc').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_ranged_dps_inc').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_spell_dps_inc').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_ignore_armor').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_magic_penetration').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_max_health').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_max_mana').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_magic_resist').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_armor').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_tackt').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_crit').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_pvp').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_dex').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_str').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_int').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_sta').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_spi').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_rate_shield').value = 0;
                            document.getElementById('slot' + slot + '_' + i + '_gravs_shield_mul').value = 0;
                        }
                    }
                }
            }
            if (slot != 10 && slot != 20) {
                change_GS(slot);
            }

        }
    });
    CloseEditor_grade();
}

function changer_ef(id, slot, grade) {

    $("#LoadingImage").show();
    if (slot < 9) {
        var ef_armor = Number(document.getElementById('rangeArmor').value);
        if ($("input").is("#rangeResist")) {
            var ef_resist = Number(document.getElementById('rangeResist').value);
        }
        else {
            var ef_resist = 0;
        }
        var ef_attack = 0;
        var ef_hill = 0;
        var ef_m_attack = 0;
    }
    if (slot > 15 && slot < 19) {
        if ($("input").is("#rangeArmor")) {
            var ef_armor = Number(document.getElementById('rangeArmor').value);
        }
        else {
            var ef_armor = 0;
        }
        var ef_resist = 0;
        if ($("input").is("#rangeAttack")) {
            var ef_attack = Number(document.getElementById('rangeAttack').value);
        }
        else {
            var ef_attack = 0;
        }
        if ($("input").is("#rangehill")) {
            var ef_hill = Number(document.getElementById('rangehill').value);
        }
        else {
            var ef_hill = 0;
        }
        if ($("input").is("#range_m_attack")) {
            var ef_m_attack = Number(document.getElementById('range_m_attack').value);
        }
        else {
            var ef_m_attack = 0;
        }
    }

    var runs_changer = $('.editor #runs_slot').html();
    var gs_changer = $('.editor #gear_score').html();
    var grav1_changer = $('.editor #slot_grav1').html();
    var grav2_changer = $('.editor #slot_grav2').html();
    var grav3_changer = $('.editor #slot_grav3').html();
    var grav4_changer = $('.editor #slot_grav4').html();
    var grav5_changer = $('.editor #slot_grav5').html();
    var grav6_changer = $('.editor #slot_grav6').html();
    var grav7_changer = $('.editor #slot_grav7').html();


    $.ajax({
        type: 'POST',
        url: 'inc2/changer.php',
        data: 'itemid=' + id + '&slot=' + slot + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&grade=' + grade,
        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor').html(data);
            $('.editor #runs_slot').html(runs_changer);

            $('.editor #slot_grav1').html(grav1_changer);
            $('.editor #slot_grav2').html(grav2_changer);
            $('.editor #slot_grav3').html(grav3_changer);
            $('.editor #slot_grav4').html(grav4_changer);
            $('.editor #slot_grav5').html(grav5_changer);
            $('.editor #slot_grav6').html(grav6_changer);
            $('.editor #slot_grav7').html(grav7_changer);
            $('.editor #gear_score').html(gs_changer);
        }
    });
    Close_ef_editor();
}

function changer_clear(id, slot, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, grade) {
    $("#LoadingImage").show();
    if ($("div").is(".editor #sintez")) {
        var sintez_var = $('.editor #sintez').html();
    }
    if ($("div").is(".editor #sintez_k")) {
        var sintez_var = $('.editor #sintez_k').html();
    }
    $.ajax({
        type: 'POST',
        url: 'inc2/changer.php',
        data: 'itemid=' + id + '&slot=' + slot + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&grade=' + grade,
        success: function (data) {
            $("#LoadingImage").hide();
            $('.editor').html(data);
            if ($("div").is(".editor #sintez")) {
                $('.editor #sintez').html(sintez_var);
            }
            if ($("div").is(".editor #sintez_k")) {
                $('.editor #sintez_k').html(sintez_var);
            }
            var slotsElem = document.getElementById('slot_number_' + slot);
            var elements = slotsElem.getElementsByTagName('input');
            var base_gs = $('#slot_number_' + slot + ' #slot' + slot + '_lvl').val();
            for (var i = 0, elementslength = elements.length; i < elementslength; i++) {
                slotsElem.getElementsByTagName('input')[i].value = 0;
            }
            $('#slot_number_' + slot + ' #slot' + slot + '_lvl').val(base_gs);
            if (slot != 10 && slot != 20) {
                var gear_score = '<a style="color:#949293">Рейтинг экипировки (предмет + улучшения)</a><br />' + (Number(Math.round(base_gs)) / 100).toFixed(1) + ' (' + Number((Math.round(base_gs)) / 100).toFixed(1) + ' + 0.0)<div id="line"></div>';
                $('.editor #gear_score').html(gear_score);
            }

        }
    });

}


function WearThis(id, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, slot, grade, category_id) {

    $("#LoadingImage").show();
    document.getElementById('editor').innerHTML = "";
    document.getElementById('editor_compar').innerHTML = "";
    document.getElementById('editor_show').innerHTML = "";

    if (slot == 16) {
        Weapon(category_id);
    }
    $.ajax({
        type: 'POST',
        url: 'inc2/tooltip.php',
        data: 'itemid=' + id + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&slot=' + slot + '&grade=' + grade,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.slot' + slot).html(data);
            if (slot != 10 && slot != 20) {
                var base_gs = $('#slot_number_' + slot + ' #slot' + slot + '_lvl').val();
                var runs_gs = $('#slot_number_' + slot + ' #slot' + slot + '_roons_lvl').val();
                var gravs_gs1 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_1_lvl').val();
                var gravs_gs2 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_2_lvl').val();
                var gravs_gs3 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_3_lvl').val();
                var gravs_gs4 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_4_lvl').val();
                var gravs_gs5 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_5_lvl').val();
                var gravs_gs6 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_6_lvl').val();
                var gravs_gs7 = $('#slot_number_' + slot + ' #slot' + slot + '_gravs_7_lvl').val();
                var gs_d_arr = [Number(runs_gs), Number(gravs_gs1), Number(gravs_gs2), Number(gravs_gs3), Number(gravs_gs4), Number(gravs_gs5), Number(gravs_gs6), Number(gravs_gs7)];
                var gs_d = 0;
                for (var i = 0; i < 8; i++) {
                    if (Number(gs_d_arr[i]) > 0) {
                        gs_d += Number(gs_d_arr[i]);
                    }
                }
                var gear_score = '<a style="color:#949293">Рейтинг экипировки (предмет + улучшения)</a><br />' + ((Number(Math.round(base_gs)) + Number(gs_d)) / 100).toFixed(1) + ' (' + Number((Math.round(base_gs)) / 100).toFixed(1) + ' + ' + Number((gs_d) / 100).toFixed(1) + ')<div id="line"></div>';
                $('.slot' + slot + ' #gear_score').html(gear_score);
            }

            setCalc(slot);


        }
    });


}

function WearThis_set(id1, id3, id4, id5, id6, id7, id8, id9, grade, category, lvl) {

    $('#set_show').css('display', 'none');
    $("#LoadingImage").show();
    var sets_array = [0, id1, 0, id3, id4, id5, id6, id7, id8, id9];
    var k = 0;
    var last = 0;
    var sar = sets_array.length;
    for (var i = sar; i > 0; i--) {
        if (sets_array[i] > 0) {
            last += 1;
        }
    }

    for (var i = sar; i > 0; i--) {
        if (sets_array[i] > 0) {
            k += 1;
            resetSlot_compar(i);
            WearThis_set_s(sets_array[i], i, grade, last, k, category, lvl);
        }
    }

};

function WearThis_set_s(id, slot, grade, last, k, category, lvl) {

    $.ajax({
        type: 'POST',
        url: 'inc2/tooltip_set.php',
        data: 'itemid=' + id + '&slot=' + slot + '&grade=' + grade + '&last=' + last + '&k=' + k + '&category=' + category + '&lvl=' + lvl,
        dataType: "html",
        success: function (data) {
            $('.slot' + slot).html(data);
            if (last == k) {
                setTimeout(Calc_sett, 500);
            }
        }
    });

}

function Calc_sett() {
    setCalc(1);
}


function WearThis_s(id, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, slot, grade, category_id) {
    if (slot == 16) {
        Weapon(category_id);
    }
    $.ajax({
        type: 'POST',
        url: 'inc2/tooltip.php',
        data: 'itemid=' + id + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&slot=' + slot + '&grade=' + grade,

        success: function (data) {
            $('.slot' + slot).html(data);
            setCalc(slot);
        }
    });


}

function WearThisChanger(id, slot, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack, grade, category_id) {
    slot_values = '';
    $("#LoadingImage").show();
    var runs_html = $('.editor #runs_slot').html();
    var gs_changer = $('.editor #gear_score').html();
    var gravs1_html = $('.editor #slot_grav1').html();
    var gravs2_html = $('.editor #slot_grav2').html();
    var gravs3_html = $('.editor #slot_grav3').html();
    var gravs4_html = $('.editor #slot_grav4').html();
    var gravs5_html = $('.editor #slot_grav5').html();
    var gravs6_html = $('.editor #slot_grav6').html();
    var gravs7_html = $('.editor #slot_grav7').html();


    if (slot == 9) {
        if ($('div').is('#sintez')) {
            var sintez_var = $('.editor #sintez').html();
        }
    }
    if (slot == 10) {
        if ($('div').is('#sintez_k')) {
            var sintez_var = $('.editor #sintez_k').html();
        }
    }

    document.getElementById('editor').innerHTML = "";
    if (slot == 16) {
        Weapon(category_id);
    }
    $.ajax({
        type: 'POST',
        url: 'inc2/tooltip.php',
        data: 'itemid=' + id + '&slot=' + slot + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack + '&grade=' + grade,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.slot' + slot).html(data);
            if (slot == 9) {
                if ($("div").is('#sintez')) {
                    $('.slot' + slot + ' #sintez').html(sintez_var);
                }
            }
            if (slot == 10) {
                if ($("div").is('#sintez_k')) {
                    $('.slot' + slot + ' #sintez_k').html(sintez_var);
                }
                if ($("div").is('#into_sintez_k')) {
                    $('.slot' + slot + ' #into_sintez_k').html(sintez_var);
                }
            }
            $('.slot' + slot + ' #runs_slot').html(runs_html);
            $('.slot' + slot + ' #slot_grav1').html(gravs1_html);
            $('.slot' + slot + ' #slot_grav2').html(gravs2_html);
            $('.slot' + slot + ' #slot_grav3').html(gravs3_html);
            $('.slot' + slot + ' #slot_grav4').html(gravs4_html);
            $('.slot' + slot + ' #slot_grav5').html(gravs5_html);
            $('.slot' + slot + ' #slot_grav6').html(gravs6_html);
            $('.slot' + slot + ' #slot_grav7').html(gravs7_html);
            $('.slot' + slot + ' #gear_score').html(gs_changer);
            setCalc(slot);


        }
    });

}

function check_diff_stats(slot) {
    var stats_up = '<img src="images/stat_up.png"><a style="color:#7CDC57">';
    var stats_down = '<img src="images/stat_down.png"><a style="color:#c33e39">';
    var stats_array = ['str', 'dex', 'int', 'sta', 'spi', 'armor', 'm_armor', 'item_dps', 'item_mdps', 'item_hildps'];

    if (Number(Math.round($('#slot_number_' + slot + ' #slot' + slot + '_lvl').val() / 10) / 10) > Number(Math.floor($('#ch_show_gear_base').val() * 10) / 10)) {
        $('a#show_gear').html(' ' + stats_down + ' ' + (Math.floor((Number(Math.round($('#slot_number_' + slot + ' #slot' + slot + '_lvl').val() / 10) / 10) - Number($('#ch_show_gear_base').val())) * 10) / 10) + '</a>');
    }
    if (Number(Math.round($('#slot_number_' + slot + ' #slot' + slot + '_lvl').val() / 10) / 10) < Number(Math.floor($('#ch_show_gear_base').val() * 10) / 10)) {
        $('a#show_gear').html(' ' + stats_up + ' ' + (Math.floor((Number($('#ch_show_gear_base').val()) - Number(Math.round($('#slot_number_' + slot + ' #slot' + slot + '_lvl').val() / 10) / 10)) * 10) / 10) + '</a>');
    }

    for (var stats_array_v = stats_array.length - 1, i = stats_array_v; i >= 0; i--) {

        if ($('#ch_show_' + stats_array[i]).val() > 0) {
            if (Number($('#ch_show_' + stats_array[i]).val()) > Number($('#ch_' + stats_array[i]).val())) {
                $('a#show_' + stats_array[i]).html(' ' + stats_up + ' ' + Math.floor(($('#ch_show_' + stats_array[i]).val() - $('#ch_' + stats_array[i]).val()) * 10) / 10 + '</a>');
            }
            if (Number($('#ch_show_' + stats_array[i]).val()) < Number($('#ch_' + stats_array[i]).val())) {
                $('a#show_' + stats_array[i]).html(' ' + stats_down + ' ' + Math.floor(($('#ch_' + stats_array[i]).val() - $('#ch_show_' + stats_array[i]).val()) * 10) / 10 + '</a>');
            }
        }
    }
}


function showThis_compar(id, slot, grade, ef_armor, ef_resist, ef_attack, ef_hill, ef_m_attack) {


    $.ajax({
        type: 'POST',
        url: 'inc2/showtip_compar.php',
        data: 'itemid=' + id + '&slot=' + slot + '&grade=' + grade + '&ef_armor=' + ef_armor + '&ef_resist=' + ef_resist + '&ef_attack=' + ef_attack + '&ef_hill=' + ef_hill + '&ef_m_attack=' + ef_m_attack,
        success: function (data) {
            $("#editor_show").html(data);
            check_diff_stats(slot);

        }
    });

}
function showThis(id, slot, grade) {


    $.ajax({
        type: 'POST',
        url: 'inc2/showtip.php',
        data: 'itemid=' + id + '&slot=' + slot + '&grade=' + grade,
        success: function (data) {
            $("#aacalc_showinfo").html(data);

        }
    });

}

function showThis_set(id, slot, grade) {


    $.ajax({
        type: 'POST',
        url: 'inc2/showtip_set.php',
        data: 'itemid=' + id + '&slot=' + slot + '&grade=' + grade,
        success: function (data) {
            $("#aacalc_showinfo_set").html(data);

        }
    });

}


function showThisRuns(id, slot, grade) {

    $.ajax({
        type: 'POST',
        url: 'inc2/showtipruns.php',
        data: 'itemid=' + id + '&slot=' + slot + '&grade=' + grade,
        success: function (data) {
            $("#aacalc_showinfo").html(data);

        }
    });

}


function Weapon(category_id) {

    if (category_id > 126) {

        document.getElementById('slot17').innerHTML = "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\">";
        var slotsElem = document.getElementById('slot_number_17');
        var elements = slotsElem.getElementsByTagName('input');
        for (var i = 0, elements_var = elements.length; i < elements_var; i++) {
            slotsElem.getElementsByTagName('input')[i].value = 0;
        }
        document.getElementById('shield_weapon').value = 0;
        document.getElementById('2_weapon').value = 0;


    }

    else {
        if (document.getElementById('slot17').innerHTML == "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(17)\">" || document.getElementById('slot17').innerHTML == "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\">") {
            document.getElementById('slot17').innerHTML = "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(17)\">";
        }
    }

}


function clearThis() {
    if ($("div").is("#aacalc_showinfo")) {
        document.getElementById('aacalc_showinfo').innerHTML = "";
    }
}

function clearThis_set() {
    if ($("div").is("#aacalc_showinfo_set")) {
        document.getElementById('aacalc_showinfo_set').innerHTML = "";
    }
}


function clearTitle() {
    if ($("div").is("#title_showinfo")) {
        document.getElementById('title_showinfo').innerHTML = "";
    }
}

function Clear_script_d(slot) {
    setTimeout(Clear_script(slot), 200);
}
function Clear_script(slot) {
    $('#slot' + slot + ' #scripts_tag').empty();

}

function Clear_script_i() {
    setTimeout(Clear_script_index, 200);
}
function Clear_script_index() {
    $('#scripts_tag_index').empty();

}


function resetSlot_compar(slot) {
    slot_values = '';
    document.getElementById('editor').innerHTML = "";
    if (slot == 16) {
        document.getElementById('dubble_weapon').value = 0;
        if (document.getElementById('slot17').innerHTML == "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\">") {
            document.getElementById('slot17').innerHTML = "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(17)\">";
        }
    }
    if (slot == 17) {
        document.getElementById('shield_weapon').value = 0;
        document.getElementById('2_weapon').value = 0;
    }
    if (slot < 9) {
        document.getElementById('slot' + slot + '_light').value = 0;
        document.getElementById('slot' + slot + '_middle').value = 0;
        document.getElementById('slot' + slot + '_heavy').value = 0;
        document.getElementById('slot' + slot + '_light_grade').value = 0;
        document.getElementById('slot' + slot + '_middle_grade').value = 0;
        document.getElementById('slot' + slot + '_heavy_grade').value = 0;
        document.getElementById('slot' + slot + '_lvl').value = 0;
    }

    var slotsElem = document.getElementById('slot_number_' + slot);
    var elements = slotsElem.getElementsByTagName('input');
    for (var i = 0, elements_var = elements.length; i < elements_var; i++) {
        if (slotsElem.getElementsByTagName('input')[i].value != 0) {
            slotsElem.getElementsByTagName('input')[i].value = 0;
        }
    }

    if (slot == 9) {
        if ($("div").is("#icon_8")) {
            document.getElementById('icon_8').innerHTML = "";
        }
    }
    if (slot == 14) {
        if ($("div").is("#icon_6")) {
            document.getElementById('icon_6').innerHTML = "";
        }
    }
    if (slot == 15) {
        if ($("div").is("#icon_7")) {
            document.getElementById('icon_7').innerHTML = "";
        }
    }
    if (slot == 10) {
        if ($("div").is("#icon_5")) {
            document.getElementById('icon_5').innerHTML = "";
        }
    }

}


function resetSlot(slot) {
    slot_values = '';
    document.getElementById('editor').innerHTML = "";
    if (slot == 16) {
        document.getElementById('dubble_weapon').value = 0;
        if (document.getElementById('slot17').innerHTML == "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\">") {
            document.getElementById('slot17').innerHTML = "<img src=\"images/slots/slot17.png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(17)\">";
        }
    }
    if (slot == 17) {
        document.getElementById('shield_weapon').value = 0;
        document.getElementById('2_weapon').value = 0;
    }
    if (slot < 9) {
        document.getElementById('slot' + slot + '_light').value = 0;
        document.getElementById('slot' + slot + '_middle').value = 0;
        document.getElementById('slot' + slot + '_heavy').value = 0;
        document.getElementById('slot' + slot + '_light_grade').value = 0;
        document.getElementById('slot' + slot + '_middle_grade').value = 0;
        document.getElementById('slot' + slot + '_heavy_grade').value = 0;
        document.getElementById('slot' + slot + '_lvl').value = 0;
    }

    var emptySlot = "<img src=\"images/slots/slot" + slot + ".png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(" + slot + ")\">"
    var slotsElem = document.getElementById('slot_number_' + slot);
    var elements = slotsElem.getElementsByTagName('input');
    for (var i = 0, elements_var = elements.length; i < elements_var; i++) {
        if (slotsElem.getElementsByTagName('input')[i].value != 0) {
            slotsElem.getElementsByTagName('input')[i].value = 0;
        }
    }

    if (slot == 9) {
        if ($("div").is("#icon_8")) {
            document.getElementById('icon_8').innerHTML = "";
        }
    }
    if (slot == 14) {
        if ($("div").is("#icon_6")) {
            document.getElementById('icon_6').innerHTML = "";
        }
    }
    if (slot == 15) {
        if ($("div").is("#icon_7")) {
            document.getElementById('icon_7').innerHTML = "";
        }
    }
    if (slot == 10) {
        if ($("div").is("#icon_5")) {
            document.getElementById('icon_5').innerHTML = "";
        }
    }


    $('.slot' + slot).html(emptySlot);

    setCalc(slot);
}


function reset_er(slot) {
    if (slot == 14) {
        if ($("div").is("#icon_6")) {
            document.getElementById('icon_6').innerHTML = "";
        }
    }
    if (slot == 15) {
        if ($("div").is("#icon_7")) {
            document.getElementById('icon_7').innerHTML = "";
        }
    }
    var emptySlot = "<img src=\"images/slots/slot" + slot + ".png\" style=\"opacity: 0.85;\" width=\"42\" border=\"0\" onClick=\"WearingSlot(" + slot + ")\">";
    var slotsElem = document.getElementById('slot_number_' + slot);
    var elements = slotsElem.getElementsByTagName('input');
    for (var i = 0, elements_var = elements.length; i < elements_var; i++) {
        slotsElem.getElementsByTagName('input')[i].value = 0;
    }
    $('.slot' + slot).html(emptySlot);
}

function cancelSlot(slot) {

    $('#slot_number_' + slot).html(slot_values);
    slot_values = '';
    document.getElementById('editor').innerHTML = "";
    document.getElementById('editor_compar').innerHTML = "";
    document.getElementById('editor_show').innerHTML = "";

}

function saveStat(slot) {

    $('#slot_number_' + slot).html(slot_values);
    slot_values = '';

}

function SearchItem(slot) {
    $("#LoadingImage").show();

    $.ajax({
        type: 'POST',
        url: 'inc2/searchitem.php',
        data: 'slot=' + slot,

        success: function (data) {
            $("#LoadingImage").hide();
            $('.wear_wnd').html(data);
        }
    });
}

function loadSet() {

    var s_array = [1, 3, 4, 5, 6, 7, 8, 9];
    var bonus = [[], [], [], [], [], [], [], [], []];

    for (var ss_i = 0, s_arraylength = s_array.length; ss_i < s_arraylength; ss_i++) {
        for (var part_i = 1; part_i < 9; part_i++) {
            for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                    bonus[part_i][s_array[ss_i]] = 1;
                    break;
                } else {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                    bonus[part_i][s_array[ss_i]] = 0;
                }
            }
        }

        var sum_bonuses_1 = (bonus[1][1] + bonus[2][1] + bonus[3][1] + bonus[4][1] + bonus[5][1] + bonus[6][1] + bonus[7][1] + bonus[8][1]);
        var sum_bonuses_3 = (bonus[1][3] + bonus[2][3] + bonus[3][3] + bonus[4][3] + bonus[5][3] + bonus[6][3] + bonus[7][3] + bonus[8][3]);
        var sum_bonuses_4 = (bonus[1][4] + bonus[2][4] + bonus[3][4] + bonus[4][4] + bonus[5][4] + bonus[6][4] + bonus[7][4] + bonus[8][4]);
        var sum_bonuses_5 = (bonus[1][5] + bonus[2][5] + bonus[3][5] + bonus[4][5] + bonus[5][5] + bonus[6][5] + bonus[7][5] + bonus[8][5]);
        var sum_bonuses_6 = (bonus[1][6] + bonus[2][6] + bonus[3][6] + bonus[4][6] + bonus[5][6] + bonus[6][6] + bonus[7][6] + bonus[8][6]);
        var sum_bonuses_7 = (bonus[1][7] + bonus[2][7] + bonus[3][7] + bonus[4][7] + bonus[5][7] + bonus[6][7] + bonus[7][7] + bonus[8][7]);
        var sum_bonuses_8 = (bonus[1][8] + bonus[2][8] + bonus[3][8] + bonus[4][8] + bonus[5][8] + bonus[6][8] + bonus[7][8] + bonus[8][8]);
        var sum_bonuses_9 = (bonus[1][9] + bonus[2][9] + bonus[3][9] + bonus[4][9] + bonus[5][9] + bonus[6][9] + bonus[7][9] + bonus[8][9]);
    }


    var slots_wear = [1, 3, 4, 5, 6, 7, 8, 9];
    var sum_bonuses = [sum_bonuses_1, sum_bonuses_3, sum_bonuses_4, sum_bonuses_5, sum_bonuses_6, sum_bonuses_7, sum_bonuses_8, sum_bonuses_9]

    for (var s_i = 0; s_i < 8; s_i++) {


        if (sum_bonuses[s_i] == 2) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
        }
        if (sum_bonuses[s_i] == 3) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
        }
        if (sum_bonuses[s_i] == 4) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(4);
        }
        if (sum_bonuses[s_i] == 5) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(5);
        }
        if (sum_bonuses[s_i] == 6) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(6);
        }
        if (sum_bonuses[s_i] == 7) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(7);
        }
        if (sum_bonuses[s_i] == 8) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(8);
        }
        if (sum_bonuses[s_i] < 2) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
        }

    }


    var s_array = [11, 12, 13, 14, 15, 16];
    var bonus = [[], [], [], [], [], [], [], [], []];

    for (var ss_i = 0, s_arraylength = s_array.length - 1; ss_i < s_arraylength; ss_i++) {
        for (var part_i = 1; part_i < 4; part_i++) {
            for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                    bonus[part_i][s_array[ss_i]] = 1;
                    break;
                } else {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                    bonus[part_i][s_array[ss_i]] = 0;
                }
            }
        }

        var sum_bonuses_11 = (bonus[1][11] + bonus[2][11] + bonus[3][11]);
        var sum_bonuses_12 = (bonus[1][12] + bonus[2][12] + bonus[3][12]);
        var sum_bonuses_13 = (bonus[1][13] + bonus[2][13] + bonus[3][13]);
        var sum_bonuses_14 = (bonus[1][14] + bonus[2][14] + bonus[3][14]);
        var sum_bonuses_15 = (bonus[1][15] + bonus[2][15] + bonus[3][15]);
    }
    var slots_wear = [11, 12, 13, 14, 15];
    var sum_bonuses = [sum_bonuses_11, sum_bonuses_12, sum_bonuses_13, sum_bonuses_14, sum_bonuses_15]

    for (var s_i = 0; s_i < 5; s_i++) {

        if (sum_bonuses[s_i] == 2) {

            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
        }
        if (sum_bonuses[s_i] == 3) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
        }
        if (sum_bonuses[s_i] < 2) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
        }
    }

    var s_array = [16, 17, 18, 19];
    var bonus = [[], [], [], [], []];

    for (var ss_i = 0, s_arraylength = s_array.length - 1; ss_i < s_arraylength; ss_i++) {
        for (var part_i = 1; part_i < 4; part_i++) {
            for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value)
                    && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                    bonus[part_i][s_array[ss_i]] = 1;
                    break;
                }
                else {
                    $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                    bonus[part_i][s_array[ss_i]] = 0;
                }
            }
        }

        var sum_bonuses_16 = (bonus[1][16] + bonus[2][16] + bonus[3][16]);
        var sum_bonuses_17 = (bonus[1][17] + bonus[2][17] + bonus[3][17]);
        var sum_bonuses_18 = (bonus[1][18] + bonus[2][18] + bonus[3][18]);

    }
    var slots_wear = [16, 17, 18];
    var sum_bonuses = [sum_bonuses_16, sum_bonuses_17, sum_bonuses_18];

    for (var s_i = 0; s_i < 3; s_i++) {

        if (sum_bonuses[s_i] == 2) {

            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
        }
        if (sum_bonuses[s_i] == 3) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
        }
        if (sum_bonuses[s_i] < 2) {
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
            $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
            $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
        }
    }

}


function setCalc(slot) {


    if (slot < 10) {

        var s_array = [1, 3, 4, 5, 6, 7, 8, 9];
        var bonus = [[], [], [], [], [], [], [], [], []];

        for (var ss_i = 0, s_arraylength = s_array.length; ss_i < s_arraylength; ss_i++) {
            for (var part_i = 1; part_i < 9; part_i++) {
                for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                    if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                        bonus[part_i][s_array[ss_i]] = 1;
                        break;
                    } else {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                        bonus[part_i][s_array[ss_i]] = 0;
                    }
                }
            }

            var sum_bonuses_1 = (bonus[1][1] + bonus[2][1] + bonus[3][1] + bonus[4][1] + bonus[5][1] + bonus[6][1] + bonus[7][1] + bonus[8][1]);
            var sum_bonuses_3 = (bonus[1][3] + bonus[2][3] + bonus[3][3] + bonus[4][3] + bonus[5][3] + bonus[6][3] + bonus[7][3] + bonus[8][3]);
            var sum_bonuses_4 = (bonus[1][4] + bonus[2][4] + bonus[3][4] + bonus[4][4] + bonus[5][4] + bonus[6][4] + bonus[7][4] + bonus[8][4]);
            var sum_bonuses_5 = (bonus[1][5] + bonus[2][5] + bonus[3][5] + bonus[4][5] + bonus[5][5] + bonus[6][5] + bonus[7][5] + bonus[8][5]);
            var sum_bonuses_6 = (bonus[1][6] + bonus[2][6] + bonus[3][6] + bonus[4][6] + bonus[5][6] + bonus[6][6] + bonus[7][6] + bonus[8][6]);
            var sum_bonuses_7 = (bonus[1][7] + bonus[2][7] + bonus[3][7] + bonus[4][7] + bonus[5][7] + bonus[6][7] + bonus[7][7] + bonus[8][7]);
            var sum_bonuses_8 = (bonus[1][8] + bonus[2][8] + bonus[3][8] + bonus[4][8] + bonus[5][8] + bonus[6][8] + bonus[7][8] + bonus[8][8]);
            var sum_bonuses_9 = (bonus[1][9] + bonus[2][9] + bonus[3][9] + bonus[4][9] + bonus[5][9] + bonus[6][9] + bonus[7][9] + bonus[8][9]);
        }


        var slots_wear = [1, 3, 4, 5, 6, 7, 8, 9];
        var sum_bonuses = [sum_bonuses_1, sum_bonuses_3, sum_bonuses_4, sum_bonuses_5, sum_bonuses_6, sum_bonuses_7, sum_bonuses_8, sum_bonuses_9]

        for (var s_i = 0; s_i < 8; s_i++) {


            if (sum_bonuses[s_i] == 2) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
            }
            if (sum_bonuses[s_i] == 3) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
            }
            if (sum_bonuses[s_i] == 4) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(4);
            }
            if (sum_bonuses[s_i] == 5) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(5);
            }
            if (sum_bonuses[s_i] == 6) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(6);
            }
            if (sum_bonuses[s_i] == 7) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(7);
            }
            if (sum_bonuses[s_i] == 8) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(8);
            }
            if (sum_bonuses[s_i] < 2) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses8').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses7').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses5').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses4').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
            }

        }
        var summ_light = 0 + Number($("#sets_buffs #slot1_light").val()) + Number($("#sets_buffs #slot3_light").val()) + Number($("#sets_buffs #slot4_light").val()) + Number($("#sets_buffs #slot5_light").val()) + Number($("#sets_buffs #slot6_light").val()) + Number($("#sets_buffs #slot7_light").val()) + Number($("#sets_buffs #slot8_light").val());
        var summ_middle = 0 + Number($("#sets_buffs #slot1_middle").val()) + Number($("#sets_buffs #slot3_middle").val()) + Number($("#sets_buffs #slot4_middle").val()) + Number($("#sets_buffs #slot5_middle").val()) + Number($("#sets_buffs #slot6_middle").val()) + Number($("#sets_buffs #slot7_middle").val()) + Number($("#sets_buffs #slot8_middle").val());
        var summ_heavy = 0 + Number($("#sets_buffs #slot1_heavy").val()) + Number($("#sets_buffs #slot3_heavy").val()) + Number($("#sets_buffs #slot4_heavy").val()) + Number($("#sets_buffs #slot5_heavy").val()) + Number($("#sets_buffs #slot6_heavy").val()) + Number($("#sets_buffs #slot7_heavy").val()) + Number($("#sets_buffs #slot8_heavy").val());

        if (summ_light > 3 || summ_middle > 3 || summ_heavy > 3) {
            $.ajax({
                type: 'POST',
                url: 'inc2/setsbuffs.php',
                data: 'summ_light=' + summ_light + '&summ_middle=' + summ_middle + '&summ_heavy=' + summ_heavy,
                success: function (data) {
                    $("#icon_1").html(data);

                }
            });
        }
        if (summ_light < 4 && summ_middle < 4 && summ_heavy < 4) {
            document.getElementById('icon_1').innerHTML = "";
            document.getElementById('sets_buff_ua_max_health').value = 0;
            document.getElementById('sets_buff_ua_max_health_proc').value = 0;
            document.getElementById('sets_buff_ua_max_mana').value = 0;
            document.getElementById('sets_buff_ua_armor').value = 0;
            document.getElementById('sets_buff_ua_armor_proc').value = 0;
            document.getElementById('sets_buff_ua_move_speed_mul').value = 0;
            document.getElementById('sets_buff_ua_melee_speed_mul').value = 0;
            document.getElementById('sets_buff_ua_casting_time_mul').value = 0;
            document.getElementById('sets_buff_ua_dodge_mul').value = 0;
            document.getElementById('sets_buff_ua_melee_critical_mul').value = 0;
            document.getElementById('sets_buff_ua_ranged_critical_mul').value = 0;
            document.getElementById('sets_buff_ua_spell_critical_mul').value = 0;
            document.getElementById('sets_buff_ua_heal_critical_mul').value = 0;
            document.getElementById('sets_buff_ua_spell_damage_mul').value = 0;
            Calculate();
            buffset(1);
            buffset(8);
            $("#LoadingImage").hide();
        }

        var slot_light = [];
        var slot_middle = [];
        var slot_heavy = [];
        var slot_lvl = [];
        var l = [1, 3, 4, 5, 6, 7, 8];
        for (var i = 0; i < 7; i++) {
            slot_light[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_light_grade').value);
            slot_middle[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_middle_grade').value);
            slot_heavy[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_heavy_grade').value);
        }

        var light_buff = [slot_light[1], slot_light[3], slot_light[4], slot_light[5], slot_light[6], slot_light[7], slot_light[8]];

        var middle_buff = [slot_middle[1], slot_middle[3], slot_middle[4], slot_middle[5], slot_middle[6], slot_middle[7], slot_middle[8]];

        var heavy_buff = [slot_heavy[1], slot_heavy[3], slot_heavy[4], slot_heavy[5], slot_heavy[6], slot_heavy[7], slot_heavy[8]];


        var q_light = 0;
        light_buff.filter(function (x_light) {
            if (x_light > 3) {
                q_light++;
            }
        });
        var q_middle = 0;
        middle_buff.filter(function (x_middle) {
            if (x_middle > 3) {
                q_middle++;
            }
        });
        var q_heavy = 0;
        heavy_buff.filter(function (x_heavy) {
            if (x_heavy > 3) {
                q_heavy++;
            }
        });
        if (q_light > 3) {
            for (var i = 0; i < 7; i++) {
                if (slot_light[l[i]] > 0) {
                    slot_lvl[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_lvl').value);
                } else {
                    slot_lvl[l[i]] = 0;
                }
            }
            for (var i = 0, light_bufflength = light_buff.length; i < light_bufflength; i++) {
                if (light_buff[i] == 0) {
                    light_buff[i] = 12;
                }
            }
            var min_grade = Math.min.apply(0, light_buff);

            $.ajax({
                type: 'POST',
                url: 'inc2/lightbuffs.php',
                data: 'slot_1_lvl=' + slot_lvl[1] + '&slot_3_lvl=' + slot_lvl[3] + '&slot_4_lvl=' + slot_lvl[4] + '&slot_5_lvl=' + slot_lvl[5] + '&slot_6_lvl=' + slot_lvl[6] + '&slot_7_lvl=' + slot_lvl[7] + '&slot_8_lvl=' + slot_lvl[8] + '&min_grade=' + min_grade,
                success: function (data) {
                    $("#icon_2").html(data);

                }
            });
        }

        if (q_middle > 3) {
            for (var i = 0; i < 7; i++) {
                if (slot_middle[l[i]] > 0) {
                    slot_lvl[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_lvl').value);
                } else {
                    slot_lvl[l[i]] = 0;
                }
            }
            for (var i = 0, middle_bufflength = middle_buff.length; i < middle_bufflength; i++) {
                if (middle_buff[i] == 0) {
                    middle_buff[i] = 12;
                }
            }
            var min_grade = Math.min.apply(0, middle_buff);
            $.ajax({
                type: 'POST',
                url: 'inc2/middlebuffs.php',
                data: 'slot_1_lvl=' + slot_lvl[1] + '&slot_3_lvl=' + slot_lvl[3] + '&slot_4_lvl=' + slot_lvl[4] + '&slot_5_lvl=' + slot_lvl[5] + '&slot_6_lvl=' + slot_lvl[6] + '&slot_7_lvl=' + slot_lvl[7] + '&slot_8_lvl=' + slot_lvl[8] + '&min_grade=' + min_grade,
                success: function (data) {
                    $("#icon_2").html(data);

                }
            });
        }

        if (q_heavy > 3) {
            for (var i = 0; i < 7; i++) {
                if (slot_heavy[l[i]] > 0) {
                    slot_lvl[l[i]] = 0 + Number(document.getElementById('slot' + l[i] + '_lvl').value);
                } else {
                    slot_lvl[l[i]] = 0;
                }
            }
            for (var i = 0, heavy_bufflength = heavy_buff.length; i < heavy_bufflength; i++) {
                if (heavy_buff[i] == 0) {
                    heavy_buff[i] = 12;
                }
            }
            var min_grade = Math.min.apply(0, heavy_buff);
            $.ajax({
                type: 'POST',
                url: 'inc2/heavybuffs.php',
                data: 'slot_1_lvl=' + slot_lvl[1] + '&slot_3_lvl=' + slot_lvl[3] + '&slot_4_lvl=' + slot_lvl[4] + '&slot_5_lvl=' + slot_lvl[5] + '&slot_6_lvl=' + slot_lvl[6] + '&slot_7_lvl=' + slot_lvl[7] + '&slot_8_lvl=' + slot_lvl[8] + '&min_grade=' + min_grade,
                success: function (data) {
                    $("#icon_2").html(data);

                }
            });
        }

        if (q_heavy < 4 && q_light < 4 && q_middle < 4) {
            document.getElementById('icon_2').innerHTML = "";
            document.getElementById('grade_buff_ua_armor').value = 0;
            document.getElementById('grade_buff_ua_max_mana').value = 0;
            document.getElementById('grade_buff_ua_max_health').value = 0;
            document.getElementById('grade_buff_ua_incoming_damage').value = 0;
            document.getElementById('grade_buff_ua_melee_speed_mul').value = 0;
            document.getElementById('grade_buff_ua_ignore_armor').value = 0;
            document.getElementById('grade_buff_ua_magic_penetration').value = 0;
            document.getElementById('grade_buff_ua_melee_parry_mul').value = 0;
            document.getElementById('grade_buff_ua_block_mul').value = 0;
            document.getElementById('grade_buff_ua_melee_critical_bonus').value = 0;
            document.getElementById('grade_buff_ua_ranged_critical_bonus').value = 0;
            document.getElementById('grade_buff_ua_spell_critical_bonus').value = 0;
            document.getElementById('grade_buff_ua_heal_critical_bonus').value = 0;
            document.getElementById('grade_buff_ua_melee_critical_mul').value = 0;
            document.getElementById('grade_buff_ua_ranged_critical_mul').value = 0;
            document.getElementById('grade_buff_ua_spell_critical_mul').value = 0;
            document.getElementById('grade_buff_ua_heal_critical_mul').value = 0;
            Calculate();
            buffset(2);
            buffset(8);
            $("#LoadingImage").hide();
        }


    }

    if (slot > 10 && slot < 16) {


        var s_array = [11, 12, 13, 14, 15, 16];
        var bonus = [[], [], [], [], [], [], [], [], []];

        for (var ss_i = 0, s_arraylength = s_array.length - 1; ss_i < s_arraylength; ss_i++) {
            for (var part_i = 1; part_i < 4; part_i++) {
                for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                    if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                        bonus[part_i][s_array[ss_i]] = 1;
                        break;
                    } else {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                        bonus[part_i][s_array[ss_i]] = 0;
                    }
                }
            }

            var sum_bonuses_11 = (bonus[1][11] + bonus[2][11] + bonus[3][11]);
            var sum_bonuses_12 = (bonus[1][12] + bonus[2][12] + bonus[3][12]);
            var sum_bonuses_13 = (bonus[1][13] + bonus[2][13] + bonus[3][13]);
            var sum_bonuses_14 = (bonus[1][14] + bonus[2][14] + bonus[3][14]);
            var sum_bonuses_15 = (bonus[1][15] + bonus[2][15] + bonus[3][15]);
        }
        var slots_wear = [11, 12, 13, 14, 15];
        var sum_bonuses = [sum_bonuses_11, sum_bonuses_12, sum_bonuses_13, sum_bonuses_14, sum_bonuses_15]

        for (var s_i = 0; s_i < 5; s_i++) {

            if (sum_bonuses[s_i] == 2) {

                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            }
            if (sum_bonuses[s_i] == 3) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            }
            if (sum_bonuses[s_i] < 2) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
            }
        }
        if (slot == 14) {
            Calculate();
            buffset(6);
        }
        else if (slot == 15) {
            Calculate();
            buffset(7);
        }
        else {
            Calculate();
        }

    }

    if (slot > 15 && slot < 19) {

        var s_array = [16, 17, 18, 19];
        var bonus = [[], [], [], [], []];

        for (var ss_i = 0, s_arraylength = s_array.length - 1; ss_i < s_arraylength; ss_i++) {
            for (var part_i = 1; part_i < 4; part_i++) {
                for (var ss_i2 = 0; ss_i2 < s_arraylength; ss_i2++) {
                    if ((Number(document.getElementById('slot' + s_array[ss_i] + '_id' + part_i).value) == Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value)
                        && Number(document.getElementById('slot' + s_array[ss_i2] + '_id').value) > 0)) {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#F8BD47');
                        bonus[part_i][s_array[ss_i]] = 1;
                        break;
                    }
                    else {
                        $('.slot' + s_array[ss_i] + ' .tooltipsetpart' + part_i).css('color', '#949293');
                        bonus[part_i][s_array[ss_i]] = 0;
                    }
                }
            }

            var sum_bonuses_16 = (bonus[1][16] + bonus[2][16] + bonus[3][16]);
            var sum_bonuses_17 = (bonus[1][17] + bonus[2][17] + bonus[3][17]);
            var sum_bonuses_18 = (bonus[1][18] + bonus[2][18] + bonus[3][18]);

        }
        var slots_wear = [16, 17, 18];
        var sum_bonuses = [sum_bonuses_16, sum_bonuses_17, sum_bonuses_18];

        for (var s_i = 0; s_i < 3; s_i++) {

            if (sum_bonuses[s_i] == 2) {

                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(2);
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            }
            if (sum_bonuses[s_i] == 3) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').addClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#00a000');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(3);
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').addClass('eiset_on');
            }
            if (sum_bonuses[s_i] < 2) {
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses3').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').css('color', '#949293');
                $('.slot' + slots_wear[s_i] + ' #set_bonuses2').removeClass('eiset_on');
                $('.slot' + slots_wear[s_i] + ' #sets_num').html(1);
            }
        }

        var single_weapons = 0 + Number($("#weapons_buffs #1_weapon").val()) + Number($("#weapons_buffs #2_weapon").val());

        var dubble_weapons = 0 + Number($("#weapons_buffs #dubble_weapon").val());

        var shield_weapons = 0 + Number($("#weapons_buffs #shield_weapon").val());


        if (single_weapons == 2 || dubble_weapons == 1 || shield_weapons == 1) {
            $.ajax({
                type: 'POST',
                url: 'inc2/weaponsbuffs.php',
                data: 'single_weapons=' + single_weapons + '&dubble_weapons=' + dubble_weapons + '&shield_weapons=' + shield_weapons,
                success: function (data) {
                    $("#icon_3").html(data);

                }
            });
        }
        if (single_weapons != 2 && dubble_weapons != 1 && shield_weapons != 1) {
            document.getElementById('icon_3').innerHTML = "";
            document.getElementById('weapons_buff_ua_max_health').value = 0;
            document.getElementById('weapons_buff_ua_max_health_proc').value = 0;
            document.getElementById('weapons_buff_ua_max_mana').value = 0;
            document.getElementById('weapons_buff_ua_armor').value = 0;
            document.getElementById('weapons_buff_ua_magic_resist').value = 0;
            document.getElementById('weapons_buff_ua_armor_proc').value = 0;
            document.getElementById('weapons_buff_ua_move_speed_mul').value = 0;
            document.getElementById('weapons_buff_ua_melee_speed_mul').value = 0;
            document.getElementById('weapons_buff_ua_casting_time_mul').value = 0;
            document.getElementById('weapons_buff_ua_dodge_mul').value = 0;
            document.getElementById('weapons_buff_ua_melee_critical_mul').value = 0;
            document.getElementById('weapons_buff_ua_ranged_critical_mul').value = 0;
            document.getElementById('weapons_buff_ua_spell_critical_mul').value = 0;
            document.getElementById('weapons_buff_ua_heal_critical_mul').value = 0;
            document.getElementById('weapons_buff_ua_melee_damage_mul').value = 0;
            document.getElementById('weapons_buff_ua_ranged_damage_mul').value = 0;
            document.getElementById('weapons_buff_ua_spell_damage_mul').value = 0;
            document.getElementById('weapons_buff_ua_heal_mul').value = 0;
            document.getElementById('weapons_buff_ua_magic_penetration').value = 0;
            document.getElementById('weapons_buff_ua_ignore_armor').value = 0;
            document.getElementById('weapons_buff_ua_rate_shield').value = 0;
            document.getElementById('weapons_buff_ua_shield_mul').value = 0;
            Calculate();
            buffset(3);
        }


    }


    if (slot == 10) {
        Calculate();
        buffset(5);
    }
    else if (slot == 19 || slot == 20 || slot == 21) {
        Calculate();
    }
}


summa = function (m) {
    for (var s = 0, k = m.length; k; s += m[--k]);
    return s;
}
function Calculate_p() {
    setTimeout(skill_calc, 10);
    setTimeout(buffsets, 10);
}
function Calculate_s() {
    setTimeout(skill_calc, 10);
    setTimeout(Calculate, 10);
    setTimeout(buffsets, 10);
}

function Calculate_d() {
    setTimeout(vetki, 10);
    setTimeout(skill_calc, 10);
    setTimeout(Calculate, 10);
    setTimeout(buffsets, 10);
}
function Calculate_load() {
    gs_load();
    skill_calc();
    loadSet();
    Calculate();
    buffsets();
}
function gs_load() {

    var slot_arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21];
    var gs_bases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gs_runs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gs_grav = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gear_scores;
    for (var i = 0; i < 18; i++) {
        if (Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val()) > 0) {
            gs_bases[slot_arr[i]] = Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val());
        }
        if (Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value) > 0) {
            gs_runs[slot_arr[i]] = Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value);
        }

        for (var z = 1; z < 8; z++) {
            if (Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value) > 0) {
                gs_grav[slot_arr[i]] += Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value);
            }
        }


        gear_scores = '<a style="color:#949293">Рейтинг экипировки (предмет + улучшения)</a><br />' + ((Number(gs_bases[slot_arr[i]]) + 0.0001 + Number(gs_runs[slot_arr[i]] + gs_grav[slot_arr[i]])) / 100).toFixed(1) + ' (' + ((Number(gs_bases[slot_arr[i]]) + 0.0001) / 100).toFixed(1) + ' + ' + Number((Number(gs_runs[slot_arr[i]] + gs_grav[slot_arr[i]])) / 100).toFixed(1) + ')<div id="line"></div>';
        if ($('.slot' + slot_arr[i]).is(':has(#gear_score)')) {
            $('.slot' + slot_arr[i] + ' #gear_score').html(gear_scores);
        }
    }

}

function GS_calc() {
    var slot_arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21];
    var gs = 0;

    for (var i = 0; i < 18; i++) {
        if (Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val()) > 0) {
            gs += Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val());
        }
        if (Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value) > 0) {
            gs += Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value);
        }
        for (var z = 1; z < 8; z++) {
            if (Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value) > 0) {
                gs += Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value);
            }
        }
    }
    $('#gs').html(Math.floor(gs / 100));
}

function Calculate_C() {
    loadSet();
    loadC13();
    gs_load();
    def_stat();
    skill_calc();
    GS_calc();
}
function Calculate_V() {
    loadSet();
    loadC13();
    gs_load();
    def_stat();
    skill_calc();
    GS_calc();
    cool_down_dop_1();
}
function calc_points() {
    var Skill_Points = {
        1: 1,
        2: 1,
        3: 2,
        4: 2,
        5: 4,
        6: 4,
        7: 4,
        8: 5,
        9: 5,
        10: 7,
        11: 7,
        12: 7,
        13: 8,
        14: 8,
        15: 9,
        16: 9,
        17: 9,
        18: 10,
        19: 10,
        20: 11,
        21: 11,
        22: 11,
        23: 12,
        24: 12,
        25: 13,
        26: 13,
        27: 13,
        28: 14,
        29: 14,
        30: 15,
        31: 15,
        32: 15,
        33: 16,
        34: 16,
        35: 17,
        36: 17,
        37: 17,
        38: 18,
        39: 18,
        40: 19,
        41: 19,
        42: 19,
        43: 20,
        44: 20,
        45: 21,
        46: 21,
        47: 21,
        48: 22,
        49: 22,
        50: 23,
        51: 24,
        52: 25,
        53: 26,
        54: 27,
        55: 28
    };
    $('.total_points').html(Skill_Points[document.getElementById('userlvl').value]);
}

function loadC15(i) {
    var fu = window["d_tip_" + i];
    fu();
}

function loadC14() {
    for (var i = 1; i < 22; i++) {
        if ($('.slot' + i).is(':has(.tooltip)')) {
            var fu = window["d_tip_" + i];
            fu();
        }
    }
}

function loadC13() {

    if ($('.slot9').is(':has(.take_tool)')) {
        var g = $('.slot9 .take_tool').html();
        $('#icon_8').html(g);
    } else {
        $('#icon_8').html();
    }
    if ($('.slot10').is(':has(.take_tool)')) {
        var g = $('.slot10 .take_tool').html();
        $('#icon_5').html(g);
    } else {
        $('#icon_5').html();
    }
    if ($('.slot14').is(':has(.take_tool)')) {
        var g = $('.slot14 .take_tool').html();
        $('#icon_6').html(g);
    } else {
        $('#icon_6').html();
    }
    if ($('.slot15').is(':has(.take_tool)')) {
        var g = $('.slot15 .take_tool').html();
        $('#icon_7').html(g);
    } else {
        $('#icon_7').html();
    }

    for (var i = 1; i < 53; i++) {
        if ($('#icon_' + i).html() != '') {
            var w = $('#icon_' + i).html();
            var b = document.querySelectorAll('#buff_icon');
            var che = 0;
            for (var g = 0, blength = b.length; g < blength; g++) {
                if ($(b[g]).is(':has(#x_' + i + ')')) {
                    b[g].innerHTML = w;
                    che += 1;
                    break;
                }
            }
            if (che == 0) {
                $('#buff_icon:empty').first().html(w);
            }
        }
        if ($('#icon_' + i).html() == '') {
            var b = document.querySelectorAll('#buff_icon');
            for (var g = 0, blength = b.length; g < blength; g++) {
                if ($(b[g]).is(':has(#x_' + i + ')')) {
                    b[g].innerHTML = '';
                }
            }
        }
    }


    for (var i = 1; i < 11; i++) {
        var x = document.querySelectorAll('.tree');
        var y = document.querySelectorAll('.vetki');
        if ($("#tree" + i).hasClass("selected")) {
            $("#input_tree" + i).val(1);
            if (x[0].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">' && x[1].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">' && x[2].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">') {
                $('.tree:empty').first().html('<img src="db/img/items_ico/trees/' + i + '.png">');
                var vv = $('#tree' + i + ' ._sk.tree_name').html();
                $('.vetki:empty').first().html(vv);
            }
        }
        else {
            $("#input_tree" + i).val(0);
            if (x[0].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[0].innerHTML = '';
                y[0].innerHTML = '';
            }
            if (x[1].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[1].innerHTML = '';
                y[1].innerHTML = '';
            }
            if (x[2].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[2].innerHTML = '';
                y[2].innerHTML = '';
            }
        }

    }
}

function vetki() {
    for (var i = 1; i < 11; i++) {
        var x = document.querySelectorAll('.tree');
        var y = document.querySelectorAll('.vetki');
        if ($("#tree" + i).hasClass("selected")) {
            $("#input_tree" + i).val(1);
            if (x[0].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">' && x[1].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">' && x[2].innerHTML != '<img src="db/img/items_ico/trees/' + i + '.png">') {
                $('.tree:empty').first().html('<img src="db/img/items_ico/trees/' + i + '.png">');
                var vv = $('#tree' + i + ' ._sk.tree_name').html();
                $('.vetki:empty').first().html(vv);
            }
        }
        else {
            $("#input_tree" + i).val(0);
            if (x[0].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[0].innerHTML = '';
                y[0].innerHTML = '';
            }
            if (x[1].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[1].innerHTML = '';
                y[1].innerHTML = '';
            }
            if (x[2].innerHTML == '<img src="db/img/items_ico/trees/' + i + '.png">') {
                x[2].innerHTML = '';
                y[2].innerHTML = '';
            }
        }

    }

}


function skill_calc() {

    if ($("div").is("#skill75")) {
        if ($("#skill75").hasClass("selected")) {
            $("#magic_resist_pass").val(500);
            $('#icon_19').html('<div id="x_19" class="tooltip_title"><img src="db/img/items_ico/icon_skill_love26.png" width="28"><img src="images/sets_icon.png" width="28" style="position: absolute; margin-top: 0px; margin-left: -28px;" ><span id="x_19" class="tooltip_title"><div style="min-height:40px;"><img src="db/img/items_ico/icon_skill_love26.png" width="28" style="float: left; padding:5px"><div  style="font-size:13px !important; line-height:1.2; text-align:left; padding:3px !important">Эффект <br />Чистое сердце</div></div><hr style="margin: 0 5 20 5;"><div style="margin-top:-15px; margin-bottom:5px;text-align:left; line-height: 1.3; margin-left:10px; margin-right:10px"><font>Повышает сопротивление заклинателя и всех его союзников на <a style="color:#FF9D3C;">500</a> ед.</font><br /></div></span></div>');
            $('div#b_10 .i10').addClass('buff_lock');
            $('div#b_10 .i10').addClass('off_img');
            $('select.b_10').attr('disabled', 'disabled');
            $('#icon_30').html('');
            $('#skill_buff_10').val(0);
            $('#skill_buff_10_val').val(0);
            $('select.b_10 [value="0"]').attr('selected', 'selected');
        }
        else {
            $('div#b_10 .i10').removeClass('buff_lock');
            $('select.b_10').removeAttr('disabled');
            $("#magic_resist_pass").val(0);
            $('#icon_19').html('');
        }
    } else {
        $('div#b_10 .i10').removeClass('buff_lock');
        $('select.b_10').removeAttr('disabled');
        $("#magic_resist_pass").val(0);
        $('#icon_19').html('');
    }
    if ($("div").is("#skill147")) {
        if ($("#skill147").hasClass("selected")) {
            $('option#soul2').removeAttr('disabled');
            $('option#soul3').removeAttr('disabled');
        }
        else {
            $('option#soul2').attr('disabled', 'disabled');
            $('option#soul3').attr('disabled', 'disabled');
            if ($('select.b_14 :selected').val() == 1) {
            } else {
                $('#icon_34').html('');
                $('#skill_buff_14').val(0);
                $('div#b_14 .i14').addClass('off_img');
                $('select.b_14 [value="0"]').attr('selected', 'selected');
            }
        }
    } else {
        $('option#soul2').attr('disabled', 'disabled');
        $('option#soul3').attr('disabled', 'disabled');
        if ($('select.b_14 :selected').val() == 1) {
        } else {
            $('#icon_34').html('');
            $('#skill_buff_14').val(0);
            $('div#b_14 .i14').addClass('off_img');
            $('select.b_14 [value="0"]').attr('selected', 'selected');
        }
    }

    if ($("div").is("#skill121")) {
        if ($("#skill121").hasClass("selected")) {
        }
        else {
            $('#icon_43').html('');
            $('#skill_buff_23').val(0);
            $('#skill_buff_23_val').val(0);
            $('div#b_23 .i23').addClass('buff_lock  off_img');
            $('select.b_23 [value="0"]').attr('selected', 'selected');
            $('select.b_23').attr('disabled', 'disabled');
        }
    }
    else {
        $('#icon_43').html('');
        $('#skill_buff_23').val(0);
        $('#skill_buff_23_val').val(0);
        $('div#b_23 .i23').addClass('buff_lock  off_img');
        $('select.b_23 [value="0"]').attr('selected', 'selected');
        $('select.b_23').attr('disabled', 'disabled');
    }
    var icons_check = 200;
    if ($("div").is("#skill142") && $("div").is("#skill121")) {
        if ($("#skill121").hasClass("selected")) {
            icons_check = 142;
        }
    }
    var icon_s_array = [9, 10, 22, 27, 42, 43, 49, 105, 116, 121, 134, 7, icons_check];
    var baff_s_array = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 21, 23];

    for (var i = 0, icon_s_arraylength = icon_s_array.length; i < icon_s_arraylength; i++) {
        if ($("div").is("#skill" + icon_s_array[i])) {
            if ($("#skill" + icon_s_array[i]).hasClass("selected")) {
                $('div#b_' + baff_s_array[i] + ' .i' + baff_s_array[i]).removeClass('buff_lock');
                $('select.b_' + baff_s_array[i]).removeAttr('disabled');
            }
            else {
                var checksval;
                if ($('#skill_buff_' + baff_s_array[i] + '_val').val() > 0) {
                    checksval = 1;
                }
                $('div#b_' + baff_s_array[i] + ' .i' + baff_s_array[i]).addClass('buff_lock');
                $('div#b_' + baff_s_array[i] + ' .i' + baff_s_array[i]).addClass('off_img');
                $('select.b_' + baff_s_array[i] + ' [value="0"]').attr('selected', 'selected');
                $('select.b_' + baff_s_array[i]).attr('disabled', 'disabled');
                $('#icon_' + (20 + Number(baff_s_array[i]))).html('');
                if ($('input').is('#skill_buff_' + baff_s_array[i] + '_2')) {
                    $('#skill_buff_' + baff_s_array[i] + '_1').val(0);
                    $('#skill_buff_' + baff_s_array[i] + '_2').val(0);
                } else {
                    $('#skill_buff_' + baff_s_array[i]).val(0);
                }
                $('#skill_buff_' + baff_s_array[i] + '_val').val(0);
                if (checksval == 1) {
                    Calculate();
                    buffsets();
                }
            }
        } else {
            $('div#b_' + baff_s_array[i] + ' .i' + baff_s_array[i]).addClass('buff_lock');
            $('div#b_' + baff_s_array[i] + ' .i' + baff_s_array[i]).addClass('off_img');
            $('select.b_' + baff_s_array[i] + ' [value="0"]').attr('selected', 'selected');
            $('select.b_' + baff_s_array[i]).attr('disabled', 'disabled');
            $('#icon_' + (20 + Number(baff_s_array[i]))).html('');
            if ($('input').is('#skill_buff_' + baff_s_array[i] + '_2')) {
                $('#skill_buff_' + baff_s_array[i] + '_1').val(0);
                $('#skill_buff_' + baff_s_array[i] + '_2').val(0);
            } else {
                $('#skill_buff_' + baff_s_array[i]).val(0);
            }
            $('#skill_buff_' + baff_s_array[i] + '_val').val(0);
        }
    }

    if ($('#skill_buff_17_val').val() > 0 || $('#skill_buff_18_val').val() > 0 || $('#skill_buff_19_val').val() > 0 || $('#skill_buff_20_val').val() > 0) {
        if ($('select.b_22').attr('disabled')) {
            $('select.b_22').removeAttr('disabled');
        }
    }


    for (var i = 1; i < 191; i++) {
        if ($("div").is("#skill" + i)) {
            if ($("#skill" + i).hasClass("selected")) {
                $("#input_skill" + i).val(1);
            } else {
                $("#input_skill" + i).val(0);
            }
        } else {
            $("#input_skill" + i).val(0);
        }
    }

    if ($("div").is("#skill16")) {
        if ($("#skill16").hasClass("selected")) {
            $("#melee_parry_pass").val(2);
        } else {
            $("#melee_parry_pass").val(0);
        }
    } else {
        $("#melee_parry_pass").val(0);
    }
    if ($("div").is("#skill14")) {
        if ($("#skill14").hasClass("selected")) {
            $("#melee_crit_pass").val(8);
        } else {
            $("#melee_crit_pass").val(0);
        }
    } else {
        $("#melee_crit_pass").val(0);
    }
    if ($("div").is("#skill13")) {
        if ($("#skill13").hasClass("selected")) {
            $("#melee_attack_pass").val(5);
        } else {
            $("#melee_attack_pass").val(0);
        }
    } else {
        $("#melee_attack_pass").val(0);
    }
    if ($("div").is("#skill32")) {
        if ($("#skill32").hasClass("selected")) {
            $("#mana_pass").val(20);
        } else {
            $("#mana_pass").val(0);
        }
    } else {
        $("#mana_pass").val(0);
    }
    if ($("div").is("#skill35")) {
        if ($("#skill35").hasClass("selected")) {
            $("#casting_time_pass").val(6);
        } else {
            $("#casting_time_pass").val(0);
        }
    } else {
        $("#casting_time_pass").val(0);
    }
    if ($("div").is("#skill37")) {
        if ($("#skill37").hasClass("selected")) {
            $("#spell_critical_pass").val(10);
        } else {
            $("#spell_critical_pass").val(0);
        }
    } else {
        $("#spell_critical_pass").val(0);
    }
    if ($("div").is("#skill51")) {
        if ($("#skill51").hasClass("selected")) {
            $("#move_speed_pass").val(8);
        } else {
            $("#move_speed_pass").val(0);
        }
    } else {
        $("#move_speed_pass").val(0);
    }
    if ($("div").is("#skill52")) {
        if ($("#skill52").hasClass("selected")) {
            $("#toch_ranged_pass").val(5);
            $("#ranged_crit_pass").val(5);
        } else {
            $("#toch_ranged_pass").val(0);
            $("#ranged_crit_pass").val(0);
        }
    } else {
        $("#toch_ranged_pass").val(0);
        $("#ranged_crit_pass").val(0);
    }
    if ($("div").is("#skill54")) {
        if ($("#skill54").hasClass("selected")) {
            $("#dodge_pass").val(10);
        } else {
            $("#dodge_pass").val(0);
        }
    } else {
        $("#dodge_pass").val(0);
    }
    if ($("div").is("#skill56")) {
        if ($("#skill56").hasClass("selected")) {
            $("#ranged_crit_mul_pass").val(30);
            $("#ranged_crit2_pass").val(3);
        } else {
            $("#ranged_crit_mul_pass").val(0);
            $("#ranged_crit2_pass").val(0);
        }
    } else {
        $("#ranged_crit_mul_pass").val(0);
        $("#ranged_crit2_pass").val(0);
    }
    if ($("div").is("#skill72")) {
        if ($("#skill72").hasClass("selected")) {
            $("#spi_proc_pass").val(9);
        } else {
            $("#spi_proc_pass").val(0);
        }
    } else {
        $("#spi_proc_pass").val(0);
    }
    if ($("div").is("#skill73")) {
        if ($("#skill73").hasClass("selected")) {
            $("#casting_time2_pass").val(6);
        } else {
            $("#casting_time2_pass").val(0);
        }
    } else {
        $("#casting_time2_pass").val(0);
    }
    if ($("div").is("#skill74")) {
        if ($("#skill74").hasClass("selected")) {
            $("#hill_crit_mul_pass").val(50);
        } else {
            $("#hill_crit_mul_pass").val(0);
        }
    } else {
        $("#hill_crit_mul_pass").val(0);
    }
    if ($("div").is("#skill89")) {
        if ($("#skill89").hasClass("selected")) {
            $("#mana_regen_pass").val(7);
        } else {
            $("#mana_regen_pass").val(0);
        }
    } else {
        $("#mana_regen_pass").val(0);
    }
    if ($("div").is("#skill91")) {
        if ($("#skill91").hasClass("selected")) {
            $("#mana_regen2_pass").val(15);
            $("#health_regen2_pass").val(-15);
        } else {
            $("#mana_regen2_pass").val(0);
            $("#health_regen2_pass").val(0);
        }
    } else {
        $("#mana_regen2_pass").val(0);
        $("#health_regen2_pass").val(0);
    }
    if ($("div").is("#skill92")) {
        if ($("#skill92").hasClass("selected")) {
            $("#spell_crit_mul_pass").val(20);
        } else {
            $("#spell_crit_mul_pass").val(0);
        }
    } else {
        $("#spell_crit_mul_pass").val(0);
    }
    if ($("div").is("#skill129")) {
        if ($("#skill129").hasClass("selected")) {
            $("#armor_pass").val(900);
        } else {
            $("#armor_pass").val(0);
        }
    } else {
        $("#armor_pass").val(0);
    }
    if ($("div").is("#skill132")) {
        if ($("#skill132").hasClass("selected")) {
            $("#health_pass").val(900);
        } else {
            $("#health_pass").val(0);
        }
    } else {
        $("#health_pass").val(0);
    }
    if ($("div").is("#skill150")) {
        if ($("#skill150").hasClass("selected")) {
            $("#toch_melee_pass").val(5);
            $("#melee_crit2_pass").val(5);
        } else {
            $("#toch_melee_pass").val(0);
            $("#melee_crit2_pass").val(0);
        }
    } else {
        $("#toch_melee_pass").val(0);
        $("#melee_crit2_pass").val(0);
    }
    if ($("div").is("#skill151")) {
        if ($("#skill151").hasClass("selected")) {
            $("#toch_spell_pass").val(5);
            $("#spell_crit_pass").val(5);
        } else {
            $("#toch_spell_pass").val(0);
            $("#spell_crit_pass").val(0);
        }
    } else {
        $("#toch_spell_pass").val(0);
        $("#spell_crit_pass").val(0);
    }
    if ($("div").is("#skill165")) {
        if ($("#skill165").hasClass("selected")) {
            $("#casting_time3_pass").val(4);
        } else {
            $("#casting_time3_pass").val(0);
        }
    } else {
        $("#casting_time3_pass").val(0);
    }
    if ($("div").is("#skill166")) {
        if ($("#skill166").hasClass("selected")) {
            $("#health_regen_pass").val(7);
        } else {
            $("#health_regen_pass").val(0);
        }
    } else {
        $("#health_regen_pass").val(0);
    }
    if ($("div").is("#skill167")) {
        if ($("#skill167").hasClass("selected")) {
            $("#magic_resist2_pass").val(500);
        } else {
            $("#magic_resist2_pass").val(0);
        }
    } else {
        $("#magic_resist2_pass").val(0);
    }
    if ($("div").is("#skill186")) {
        if ($("#skill186").hasClass("selected")) {
            $("#casting_time4_pass").val(5);
        } else {
            $("#casting_time4_pass").val(0);
        }
    } else {
        $("#casting_time4_pass").val(0);
    }
}


function def_stat() {

    var melee_stat_dop = Number(document.getElementById('slot10_ua_time_incoming_melee_damage_add').value) + Number(document.getElementById('folik_9').value) - Number(document.getElementById('slot17_runs_incoming_damage_melee').value) + Number(document.getElementById('sintez_19').value);
    var ranged_stat_dop = Number(document.getElementById('slot10_ua_time_incoming_ranged_damage_add').value) + Number(document.getElementById('folik_9').value) - Number(document.getElementById('slot17_runs_incoming_damage_ranged').value) + Number(document.getElementById('sintez_20').value);
    var spell_stat_dop = Number(document.getElementById('slot10_ua_time_incoming_spell_damage_add').value) + Number(document.getElementById('folik_9').value) - Number(document.getElementById('slot17_runs_incoming_damage_spell').value) + Number(document.getElementById('sintez_21').value);


    var melee_stat = 0 + Number(document.getElementById('armor_base_stat').value) + melee_stat_dop;
    var ranged_stat = 0 + Number(document.getElementById('armor_base_stat').value) + ranged_stat_dop;
    var spell_stat = 0 + Number(document.getElementById('resist_base_stat').value) + spell_stat_dop;


    $('#incoming_damage_meeleStat').html(melee_stat);
    $('#incoming_damage_rangedStat').html(ranged_stat);
    $('#incoming_damage_spellStat').html(spell_stat);

    if (melee_stat_dop > 0) {
        $('#incoming_damage_meeleStat').css('color', '#00a000');
    } else {
        $('#incoming_damage_meeleStat').css('color', '#764b07');
    }
    if (ranged_stat_dop > 0) {
        $('#incoming_damage_rangedStat').css('color', '#00a000');
    } else {
        $('#incoming_damage_rangedStat').css('color', '#764b07');
    }
    if (spell_stat_dop > 0) {
        $('#incoming_damage_spellStat').css('color', '#00a000');
    } else {
        $('#incoming_damage_spellStat').css('color', '#764b07');
    }
}


function Calculate() {

    for (var i = 1; i < 22; i++) {
        if ($('.slot' + i).is(':has(.tooltip)')) {
            var fu = window["d_tip_" + i];
            fu();
        }
    }

    if ($('.slot9').is(':has(.take_tool)')) {
        var g = $('.slot9 .take_tool').html();
        $('#icon_8').html(g);
    } else {
        $('#icon_8').html();
    }
    if ($('.slot10').is(':has(.take_tool)')) {
        var g = $('.slot10 .take_tool').html();
        $('#icon_5').html(g);
    } else {
        $('#icon_5').html();
    }
    if ($('.slot14').is(':has(.take_tool)')) {
        var g = $('.slot14 .take_tool').html();
        $('#icon_6').html(g);
    } else {
        $('#icon_6').html();
    }
    if ($('.slot15').is(':has(.take_tool)')) {
        var g = $('.slot15 .take_tool').html();
        $('#icon_7').html(g);
    } else {
        $('#icon_7').html();
    }


    var eiset_sta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_spi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_dex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_int = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_str = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_max_health = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_max_mana = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_armor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_move_speed_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_critical_bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ranged_critical_bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_spell_critical_bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_dps_inc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ranged_dps_inc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_spell_dps_inc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_heal_dps_inc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_damage_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ranged_damage_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_spell_damage_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_speed_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ignore_armor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_magic_penetration = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_incoming_damage_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_magic_resist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_persistent_health_regen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_persistent_mana_regen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_casting_time_mul = [[], [], [], [], [], [], [], [], []];
    var eiset_melee_critical_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ranged_critical_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_spell_critical_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_anti_miss_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_melee_parry_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_spell_dps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_heal_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_heal_mul1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_dodge_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_block_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_incoming_heal_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_back_melee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_back_ranged = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_back_spell = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var eiset_ua_rate_shield = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    function Unique(A) {
        var n = A.length, k = 0, B = [];
        for (var i = 0; i < n; i++) {
            var j = 0;
            while (j < k && B[j] !== A[i]) j++;
            if (j == k && A[i] > 0) B[k++] = A[i];
        }
        return B;
    }


    for (var num_pi = 2; num_pi < 9; num_pi++) {

        if ($('#set_bonuses' + num_pi).hasClass('eiset_on')) {
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_incoming_heal_mul)")) {
                eiset_ua_incoming_heal_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_incoming_heal_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_back_melee)")) {
                eiset_ua_back_melee[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_back_melee").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_rate_shield)")) {
                eiset_ua_rate_shield[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_rate_shield").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#set_ua_sta)")) {
                eiset_sta[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #set_ua_sta").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#set_ua_spi)")) {
                eiset_spi[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #set_ua_spi").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#set_ua_dex)")) {
                eiset_dex[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #set_ua_dex").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#set_ua_str)")) {
                eiset_str[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #set_ua_str").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#set_ua_int)")) {
                eiset_int[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #set_ua_int").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_max_health)")) {
                eiset_max_health[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_max_health").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_max_mana)")) {
                eiset_max_mana[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_max_mana").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_armor)")) {
                eiset_armor[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_armor").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_move_speed_mul)")) {
                eiset_move_speed_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_move_speed_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_critical_bonus)")) {
                eiset_melee_critical_bonus[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_critical_bonus").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_ranged_critical_bonus)")) {
                eiset_ranged_critical_bonus[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_ranged_critical_bonus").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_spell_critical_bonus)")) {
                eiset_spell_critical_bonus[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_spell_critical_bonus").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_dps_inc)")) {
                eiset_melee_dps_inc[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_dps_inc").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_ranged_dps_inc)")) {
                eiset_ranged_dps_inc[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_ranged_dps_inc").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_heal_dps_inc)")) {
                eiset_heal_dps_inc[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_heal_dps_inc").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_spell_dps_inc)")) {
                eiset_spell_dps_inc[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_spell_dps_inc").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_damage_mul)")) {
                eiset_melee_damage_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_damage_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_ranged_damage_mul)")) {
                eiset_ranged_damage_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_ranged_damage_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_spell_damage_mul)")) {
                eiset_spell_damage_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_spell_damage_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_speed_mul)")) {
                eiset_melee_speed_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_speed_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_ignore_armor)")) {
                eiset_ignore_armor[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_ignore_armor").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_magic_penetration)")) {
                eiset_magic_penetration[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_magic_penetration").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_incoming_damage_mul)")) {
                eiset_incoming_damage_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_incoming_damage_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_magic_resist)")) {
                eiset_magic_resist[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_magic_resist").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_persistent_health_regen)")) {
                eiset_persistent_health_regen[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_persistent_health_regen").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_persistent_mana_regen)")) {
                eiset_persistent_mana_regen[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_persistent_mana_regen").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_casting_time_mul)")) {
                eiset_casting_time_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_casting_time_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_critical_mul)")) {
                eiset_melee_critical_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_critical_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_ranged_critical_mul)")) {
                eiset_ranged_critical_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_ranged_critical_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_spell_critical_mul)")) {
                eiset_spell_critical_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_spell_critical_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_anti_miss_mul)")) {
                eiset_melee_anti_miss_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_anti_miss_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_melee_parry_mul)")) {
                eiset_melee_parry_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_melee_parry_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_spell_dps)")) {
                eiset_ua_spell_dps[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_spell_dps").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_heal_mul)")) {
                eiset_ua_heal_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_heal_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_heal_mul1)")) {
                eiset_ua_heal_mul1[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_heal_mul1").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_dodge_mul)")) {
                eiset_ua_dodge_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_dodge_mul").html());
            }
            if ($("#set_bonuses" + num_pi + ".eiset_on").is(":has(#ua_block_mul)")) {
                eiset_ua_block_mul[num_pi] = Number($("#set_bonuses" + num_pi + ".eiset_on #ua_block_mul").html());
            }
        }
    }


    var lvlDown = document.getElementById('userlvl').value;
    var lvlHight = 0;

    if (document.getElementById('userlvl').value < 1) {
        document.getElementById('userlvl').value = 1;
    }
    else if (document.getElementById('userlvl').value > 50 && document.getElementById('userlvl').value <= 55) {
        lvlDown = 50;
        lvlHight = document.getElementById('userlvl').value - 50;
    }
    else if (document.getElementById('userlvl').value > 55) {
        document.getElementById('userlvl').value = 55;
        $('div.level_up').html(55);
        lvlDown = 50;
        lvlHight = document.getElementById('userlvl').value - 50;
    }


    var slot_arr = [1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21];
    var gs = 0;

    for (var i = 0; i < 18; i++) {
        if (Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val()) > 0) {
            gs += Number($('#slot_number_' + slot_arr[i] + ' #slot' + slot_arr[i] + '_lvl').val());
        }
        if (Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value) > 0) {
            gs += Number(document.getElementById('slot' + slot_arr[i] + '_roons_lvl').value);
        }
        for (var z = 1; z < 8; z++) {
            if (Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value) > 0) {
                gs += Number(document.getElementById('slot' + slot_arr[i] + '_gravs_' + z + '_lvl').value);
            }
        }
    }
    $('#gs').html(Math.floor(gs / 100));


    var dex_color = 0 + Number(document.getElementById('slot1_runs_dex').value) + Number(document.getElementById('slot3_runs_dex').value) + Number(document.getElementById('slot4_runs_dex').value) + Number(document.getElementById('slot5_runs_dex').value) + Number(document.getElementById('slot6_runs_dex').value) + Number(document.getElementById('slot7_runs_dex').value) + Number(document.getElementById('slot8_runs_dex').value) + Number(document.getElementById('slot9_runs_dex').value) + Number(document.getElementById('slot10_runs_dex').value) + Number(document.getElementById('slot11_runs_dex').value) + Number(document.getElementById('slot12_runs_dex').value) + Number(document.getElementById('slot13_runs_dex').value) + Number(document.getElementById('slot14_runs_dex').value) + Number(document.getElementById('slot15_runs_dex').value) + Number(document.getElementById('slot16_runs_dex').value) + Number(document.getElementById('slot17_runs_dex').value) + Number(document.getElementById('slot18_runs_dex').value) + Number(document.getElementById('slot19_runs_dex').value) + Number(document.getElementById('slot1_buff_ua_dex').value) + Number(document.getElementById('slot3_buff_ua_dex').value) + Number(document.getElementById('slot4_buff_ua_dex').value) + Number(document.getElementById('slot5_buff_ua_dex').value) + Number(document.getElementById('slot6_buff_ua_dex').value) + Number(document.getElementById('slot7_buff_ua_dex').value) + Number(document.getElementById('slot8_buff_ua_dex').value) + Number(document.getElementById('slot9_buff_ua_dex').value) + Number(document.getElementById('slot10_buff_ua_dex').value) + Number(document.getElementById('slot11_buff_ua_dex').value) + Number(document.getElementById('slot12_buff_ua_dex').value) + Number(document.getElementById('slot13_buff_ua_dex').value) + Number(document.getElementById('slot14_buff_ua_dex').value) + Number(document.getElementById('slot15_buff_ua_dex').value) + Number(document.getElementById('slot16_buff_ua_dex').value) + Number(document.getElementById('slot17_buff_ua_dex').value) + Number(document.getElementById('slot18_buff_ua_dex').value) + Number(document.getElementById('slot19_buff_ua_dex').value) + Number(document.getElementById('slot10_ua_time_dex').value) + summa(eiset_dex) + Number(document.getElementById('sets_buff_ua_dex').value) + Number(document.getElementById('slot21_runs_dex').value) + Number(document.getElementById('title_buff_ua_dex').value) + Number(document.getElementById('sintez_1').value) + Number(document.getElementById('pis_2').value) + Number(document.getElementById('meat_5').value) + Number(document.getElementById('meat_6').value) + Number(document.getElementById('meat_7').value) + Number(document.getElementById('meat_8').value) + Number(document.getElementById('meat_17').value) + Number(document.getElementById('skill_buff_8').value) + Number(document.getElementById('skill_buff_11_1').value) + Number(document.getElementById('meat_19').value) + Number(document.getElementById('kondit_2').value) + Number(document.getElementById('kondit_6').value);

    var str_color = 0 + Number(document.getElementById('slot1_runs_str').value) + Number(document.getElementById('slot3_runs_str').value) + Number(document.getElementById('slot4_runs_str').value) + Number(document.getElementById('slot5_runs_str').value) + Number(document.getElementById('slot6_runs_str').value) + Number(document.getElementById('slot7_runs_str').value) + Number(document.getElementById('slot8_runs_str').value) + Number(document.getElementById('slot9_runs_str').value) + Number(document.getElementById('slot10_runs_str').value) + Number(document.getElementById('slot11_runs_str').value) + Number(document.getElementById('slot12_runs_str').value) + Number(document.getElementById('slot13_runs_str').value) + Number(document.getElementById('slot14_runs_str').value) + Number(document.getElementById('slot15_runs_str').value) + Number(document.getElementById('slot16_runs_str').value) + Number(document.getElementById('slot17_runs_str').value) + Number(document.getElementById('slot18_runs_str').value) + Number(document.getElementById('slot19_runs_str').value) + Number(document.getElementById('slot1_buff_ua_str').value) + Number(document.getElementById('slot3_buff_ua_str').value) + Number(document.getElementById('slot4_buff_ua_str').value) + Number(document.getElementById('slot5_buff_ua_str').value) + Number(document.getElementById('slot6_buff_ua_str').value) + Number(document.getElementById('slot7_buff_ua_str').value) + Number(document.getElementById('slot8_buff_ua_str').value) + Number(document.getElementById('slot9_buff_ua_str').value) + Number(document.getElementById('slot10_buff_ua_str').value) + Number(document.getElementById('slot11_buff_ua_str').value) + Number(document.getElementById('slot12_buff_ua_str').value) + Number(document.getElementById('slot13_buff_ua_str').value) + Number(document.getElementById('slot14_buff_ua_str').value) + Number(document.getElementById('slot15_buff_ua_str').value) + Number(document.getElementById('slot16_buff_ua_str').value) + Number(document.getElementById('slot17_buff_ua_str').value) + Number(document.getElementById('slot18_buff_ua_str').value) + Number(document.getElementById('slot19_buff_ua_str').value) + Number(document.getElementById('slot10_ua_time_str').value) + summa(eiset_str) + Number(document.getElementById('sets_buff_ua_str').value) + Number(document.getElementById('slot21_runs_str').value) + Number(document.getElementById('title_buff_ua_str').value) + Number(document.getElementById('sintez_0').value) + Number(document.getElementById('pis_2').value) + Number(document.getElementById('meat_1').value) + Number(document.getElementById('meat_2').value) + Number(document.getElementById('meat_3').value) + Number(document.getElementById('meat_4').value) + Number(document.getElementById('meat_17').value) + Number(document.getElementById('skill_buff_8').value) + Number(document.getElementById('meat_19').value) + Number(document.getElementById('meat_21').value) + Number(document.getElementById('kondit_1').value) + Number(document.getElementById('kondit_6').value);

    var int_color = 0 + Number(document.getElementById('slot1_runs_int').value) + Number(document.getElementById('slot3_runs_int').value) + Number(document.getElementById('slot4_runs_int').value) + Number(document.getElementById('slot5_runs_int').value) + Number(document.getElementById('slot6_runs_int').value) + Number(document.getElementById('slot7_runs_int').value) + Number(document.getElementById('slot8_runs_int').value) + Number(document.getElementById('slot9_runs_int').value) + Number(document.getElementById('slot10_runs_int').value) + Number(document.getElementById('slot11_runs_int').value) + Number(document.getElementById('slot12_runs_int').value) + Number(document.getElementById('slot13_runs_int').value) + Number(document.getElementById('slot14_runs_int').value) + Number(document.getElementById('slot15_runs_int').value) + Number(document.getElementById('slot16_runs_int').value) + Number(document.getElementById('slot17_runs_int').value) + Number(document.getElementById('slot18_runs_int').value) + Number(document.getElementById('slot19_runs_int').value) + Number(document.getElementById('slot1_buff_ua_int').value) + Number(document.getElementById('slot3_buff_ua_int').value) + Number(document.getElementById('slot4_buff_ua_int').value) + Number(document.getElementById('slot5_buff_ua_int').value) + Number(document.getElementById('slot6_buff_ua_int').value) + Number(document.getElementById('slot7_buff_ua_int').value) + Number(document.getElementById('slot8_buff_ua_int').value) + Number(document.getElementById('slot9_buff_ua_int').value) + Number(document.getElementById('slot10_buff_ua_int').value) + Number(document.getElementById('slot11_buff_ua_int').value) + Number(document.getElementById('slot12_buff_ua_int').value) + Number(document.getElementById('slot13_buff_ua_int').value) + Number(document.getElementById('slot14_buff_ua_int').value) + Number(document.getElementById('slot15_buff_ua_int').value) + Number(document.getElementById('slot16_buff_ua_int').value) + Number(document.getElementById('slot17_buff_ua_int').value) + Number(document.getElementById('slot18_buff_ua_int').value) + Number(document.getElementById('slot19_buff_ua_int').value) + Number(document.getElementById('slot10_ua_time_int').value) + summa(eiset_int) + Number(document.getElementById('sets_buff_ua_int').value) + Number(document.getElementById('slot21_runs_int').value) + Number(document.getElementById('title_buff_ua_int').value) + Number(document.getElementById('sintez_3').value) + Number(document.getElementById('pis_2').value) + Number(document.getElementById('meat_13').value) + Number(document.getElementById('meat_14').value) + Number(document.getElementById('meat_15').value) + Number(document.getElementById('meat_16').value) + Number(document.getElementById('meat_18').value) + Number(document.getElementById('skill_buff_8').value) + Number(document.getElementById('meat_21').value) + Number(document.getElementById('kondit_4').value) + Number(document.getElementById('kondit_6').value);

    var sta_color = 0 + Number(document.getElementById('slot1_runs_sta').value) + Number(document.getElementById('slot3_runs_sta').value) + Number(document.getElementById('slot4_runs_sta').value) + Number(document.getElementById('slot5_runs_sta').value) + Number(document.getElementById('slot6_runs_sta').value) + Number(document.getElementById('slot7_runs_sta').value) + Number(document.getElementById('slot8_runs_sta').value) + Number(document.getElementById('slot9_runs_sta').value) + Number(document.getElementById('slot10_runs_sta').value) + Number(document.getElementById('slot11_runs_sta').value) + Number(document.getElementById('slot12_runs_sta').value) + Number(document.getElementById('slot13_runs_sta').value) + Number(document.getElementById('slot14_runs_sta').value) + Number(document.getElementById('slot15_runs_sta').value) + Number(document.getElementById('slot16_runs_sta').value) + Number(document.getElementById('slot17_runs_sta').value) + Number(document.getElementById('slot18_runs_sta').value) + Number(document.getElementById('slot19_runs_sta').value) + Number(document.getElementById('slot1_buff_ua_sta').value) + Number(document.getElementById('slot3_buff_ua_sta').value) + Number(document.getElementById('slot4_buff_ua_sta').value) + Number(document.getElementById('slot5_buff_ua_sta').value) + Number(document.getElementById('slot6_buff_ua_sta').value) + Number(document.getElementById('slot7_buff_ua_sta').value) + Number(document.getElementById('slot8_buff_ua_sta').value) + Number(document.getElementById('slot9_buff_ua_sta').value) + Number(document.getElementById('slot10_buff_ua_sta').value) + Number(document.getElementById('slot11_buff_ua_sta').value) + Number(document.getElementById('slot12_buff_ua_sta').value) + Number(document.getElementById('slot13_buff_ua_sta').value) + Number(document.getElementById('slot14_buff_ua_sta').value) + Number(document.getElementById('slot15_buff_ua_sta').value) + Number(document.getElementById('slot16_buff_ua_sta').value) + Number(document.getElementById('slot17_buff_ua_sta').value) + Number(document.getElementById('slot18_buff_ua_sta').value) + Number(document.getElementById('slot19_buff_ua_sta').value) + Number(document.getElementById('slot10_ua_time_sta').value) + summa(eiset_sta) + Number(document.getElementById('sets_buff_ua_sta').value) + Number(document.getElementById('slot21_runs_sta').value) + Number(document.getElementById('title_buff_ua_sta').value) + Number(document.getElementById('sintez_2').value) + Number(document.getElementById('pis_2').value) + Number(document.getElementById('skill_buff_8').value) + Number(document.getElementById('meat_20').value) + Number(document.getElementById('kondit_3').value) + Number(document.getElementById('kondit_6').value);

    var spi_color = 0 + Number(document.getElementById('slot1_runs_spi').value) + Number(document.getElementById('slot3_runs_spi').value) + Number(document.getElementById('slot4_runs_spi').value) + Number(document.getElementById('slot5_runs_spi').value) + Number(document.getElementById('slot6_runs_spi').value) + Number(document.getElementById('slot7_runs_spi').value) + Number(document.getElementById('slot8_runs_spi').value) + Number(document.getElementById('slot9_runs_spi').value) + Number(document.getElementById('slot10_runs_spi').value) + Number(document.getElementById('slot11_runs_spi').value) + Number(document.getElementById('slot12_runs_spi').value) + Number(document.getElementById('slot13_runs_spi').value) + Number(document.getElementById('slot14_runs_spi').value) + Number(document.getElementById('slot15_runs_spi').value) + Number(document.getElementById('slot16_runs_spi').value) + Number(document.getElementById('slot17_runs_spi').value) + Number(document.getElementById('slot18_runs_spi').value) + Number(document.getElementById('slot19_runs_spi').value) + Number(document.getElementById('slot1_buff_ua_spi').value) + Number(document.getElementById('slot3_buff_ua_spi').value) + Number(document.getElementById('slot4_buff_ua_spi').value) + Number(document.getElementById('slot5_buff_ua_spi').value) + Number(document.getElementById('slot6_buff_ua_spi').value) + Number(document.getElementById('slot7_buff_ua_spi').value) + Number(document.getElementById('slot8_buff_ua_spi').value) + Number(document.getElementById('slot9_buff_ua_spi').value) + Number(document.getElementById('slot10_buff_ua_spi').value) + Number(document.getElementById('slot11_buff_ua_spi').value) + Number(document.getElementById('slot12_buff_ua_spi').value) + Number(document.getElementById('slot13_buff_ua_spi').value) + Number(document.getElementById('slot14_buff_ua_spi').value) + Number(document.getElementById('slot15_buff_ua_spi').value) + Number(document.getElementById('slot16_buff_ua_spi').value) + Number(document.getElementById('slot17_buff_ua_spi').value) + Number(document.getElementById('slot18_buff_ua_spi').value) + Number(document.getElementById('slot19_buff_ua_spi').value) + Number(document.getElementById('slot10_ua_time_spi').value) + summa(eiset_spi) + Number(document.getElementById('sets_buff_ua_spi').value) + Number(document.getElementById('slot21_runs_spi').value) + Number(document.getElementById('title_buff_ua_spi').value) + Number(document.getElementById('sintez_4').value) + Number(document.getElementById('pis_2').value) + Number(document.getElementById('meat_9').value) + Number(document.getElementById('meat_10').value) + Number(document.getElementById('meat_11').value) + Number(document.getElementById('meat_12').value) + Number(document.getElementById('meat_18').value) + Number(document.getElementById('skill_buff_8').value) + Number(document.getElementById('meat_20').value) + Number(document.getElementById('kondit_5').value) + Number(document.getElementById('kondit_6').value);


    var sta_proc = 0 + Number(document.getElementById('title_buff_ua_sta_proc').value);
    var str_proc = 0 + Number(document.getElementById('title_buff_ua_str_proc').value);
    var spi_proc = 0 + Number(document.getElementById('spi_proc_pass').value) + Number(document.getElementById('title_buff_ua_spi_proc').value);
    var int_proc = 0 + Number(document.getElementById('title_buff_ua_int_proc').value);
    var dex_proc = 0 + Number(document.getElementById('title_buff_ua_dex_proc').value);


    var str_1 = 8 + lvlDown * 2 + lvlHight * 10 + Number(document.getElementById('slot1_a').value) + Number(document.getElementById('slot3_a').value) + Number(document.getElementById('slot4_a').value) + Number(document.getElementById('slot5_a').value) + Number(document.getElementById('slot6_a').value) + Number(document.getElementById('slot7_a').value) + Number(document.getElementById('slot8_a').value) + Number(document.getElementById('slot9_a').value) + Number(document.getElementById('slot10_a').value) + Number(document.getElementById('slot11_a').value) + Number(document.getElementById('slot12_a').value) + Number(document.getElementById('slot13_a').value) + Number(document.getElementById('slot14_a').value) + Number(document.getElementById('slot15_a').value) + Number(document.getElementById('slot16_a').value) + Number(document.getElementById('slot17_a').value) + Number(document.getElementById('slot18_a').value) + Number(document.getElementById('slot19_a').value) + Number(document.getElementById('slot9_d_buff_str').value) + Number(document.getElementById('slot11_d_buff_str').value) + Number(document.getElementById('slot12_d_buff_str').value) + Number(document.getElementById('slot13_d_buff_str').value) + Number(document.getElementById('slot14_d_buff_str').value) + Number(document.getElementById('slot15_d_buff_str').value) + Number(document.getElementById('slot16_d_buff_str').value) + Number(document.getElementById('slot17_d_buff_str').value) + str_color;
    var str = Math.round(str_1 + str_1 * str_proc / 100);


    var dex_1 = 8 + lvlDown * 2 + lvlHight * 10 + Number(document.getElementById('slot1_b').value) + Number(document.getElementById('slot3_b').value) + Number(document.getElementById('slot4_b').value) + Number(document.getElementById('slot5_b').value) + Number(document.getElementById('slot6_b').value) + Number(document.getElementById('slot7_b').value) + Number(document.getElementById('slot8_b').value) + Number(document.getElementById('slot9_b').value) + Number(document.getElementById('slot10_b').value) + Number(document.getElementById('slot11_b').value) + Number(document.getElementById('slot12_b').value) + Number(document.getElementById('slot13_b').value) + Number(document.getElementById('slot14_b').value) + Number(document.getElementById('slot15_b').value) + Number(document.getElementById('slot16_b').value) + Number(document.getElementById('slot17_b').value) + Number(document.getElementById('slot18_b').value) + Number(document.getElementById('slot19_b').value) + Number(document.getElementById('slot9_d_buff_dex').value) + Number(document.getElementById('slot11_d_buff_dex').value) + Number(document.getElementById('slot12_d_buff_dex').value) + Number(document.getElementById('slot13_d_buff_dex').value) + Number(document.getElementById('slot14_d_buff_dex').value) + Number(document.getElementById('slot15_d_buff_dex').value) + Number(document.getElementById('slot16_d_buff_dex').value) + Number(document.getElementById('slot17_d_buff_dex').value) + dex_color;
    var dex = Math.round(dex_1 + dex_1 * dex_proc / 100);

    var vit_1 = 8 + lvlDown * 2 + lvlHight * 10 + Number(document.getElementById('slot1_c').value) + Number(document.getElementById('slot3_c').value) + Number(document.getElementById('slot4_c').value) + Number(document.getElementById('slot5_c').value) + Number(document.getElementById('slot6_c').value) + Number(document.getElementById('slot7_c').value) + Number(document.getElementById('slot8_c').value) + Number(document.getElementById('slot9_c').value) + Number(document.getElementById('slot10_c').value) + Number(document.getElementById('slot11_c').value) + Number(document.getElementById('slot12_c').value) + Number(document.getElementById('slot13_c').value) + Number(document.getElementById('slot14_c').value) + Number(document.getElementById('slot15_c').value) + Number(document.getElementById('slot16_c').value) + Number(document.getElementById('slot17_c').value) + Number(document.getElementById('slot18_c').value) + Number(document.getElementById('slot19_c').value) + Number(document.getElementById('slot9_d_buff_sta').value) + Number(document.getElementById('slot11_d_buff_sta').value) + Number(document.getElementById('slot12_d_buff_sta').value) + Number(document.getElementById('slot13_d_buff_sta').value) + Number(document.getElementById('slot14_d_buff_sta').value) + Number(document.getElementById('slot15_d_buff_sta').value) + Number(document.getElementById('slot16_d_buff_sta').value) + Number(document.getElementById('slot17_d_buff_sta').value) + sta_color;
    var vit = Math.round(vit_1 + vit_1 * sta_proc / 100);

    var intl_1 = 8 + lvlDown * 2 + lvlHight * 10 + Number(document.getElementById('slot1_d').value) + Number(document.getElementById('slot3_d').value) + Number(document.getElementById('slot4_d').value) + Number(document.getElementById('slot5_d').value) + Number(document.getElementById('slot6_d').value) + Number(document.getElementById('slot7_d').value) + Number(document.getElementById('slot8_d').value) + Number(document.getElementById('slot9_d').value) + Number(document.getElementById('slot10_d').value) + Number(document.getElementById('slot11_d').value) + Number(document.getElementById('slot12_d').value) + Number(document.getElementById('slot13_d').value) + Number(document.getElementById('slot14_d').value) + Number(document.getElementById('slot15_d').value) + Number(document.getElementById('slot16_d').value) + Number(document.getElementById('slot17_d').value) + Number(document.getElementById('slot18_d').value) + Number(document.getElementById('slot19_d').value) + Number(document.getElementById('slot9_d_buff_int').value) + Number(document.getElementById('slot11_d_buff_int').value) + Number(document.getElementById('slot12_d_buff_int').value) + Number(document.getElementById('slot13_d_buff_int').value) + Number(document.getElementById('slot14_d_buff_int').value) + Number(document.getElementById('slot15_d_buff_int').value) + Number(document.getElementById('slot16_d_buff_int').value) + Number(document.getElementById('slot17_d_buff_int').value) + int_color;
    var intl = Math.round(intl_1 + intl_1 * int_proc / 100);
    var spi_1 = 8 + lvlDown * 2 + lvlHight * 10 + Number(document.getElementById('slot1_e').value) + Number(document.getElementById('slot3_e').value) + Number(document.getElementById('slot4_e').value) + Number(document.getElementById('slot5_e').value) + Number(document.getElementById('slot6_e').value) + Number(document.getElementById('slot7_e').value) + Number(document.getElementById('slot8_e').value) + Number(document.getElementById('slot9_e').value) + Number(document.getElementById('slot10_e').value) + Number(document.getElementById('slot11_e').value) + Number(document.getElementById('slot12_e').value) + Number(document.getElementById('slot13_e').value) + Number(document.getElementById('slot14_e').value) + Number(document.getElementById('slot15_e').value) + Number(document.getElementById('slot16_e').value) + Number(document.getElementById('slot17_e').value) + Number(document.getElementById('slot18_e').value) + Number(document.getElementById('slot19_e').value) + Number(document.getElementById('slot9_d_buff_spi').value) + Number(document.getElementById('slot11_d_buff_spi').value) + Number(document.getElementById('slot12_d_buff_spi').value) + Number(document.getElementById('slot13_d_buff_spi').value) + Number(document.getElementById('slot14_d_buff_spi').value) + Number(document.getElementById('slot15_d_buff_spi').value) + Number(document.getElementById('slot16_d_buff_spi').value) + Number(document.getElementById('slot17_d_buff_spi').value) + spi_color;

    var spi = Math.round(spi_1 + spi_1 * spi_proc / 100);

    var color_armor = 0 + Number(document.getElementById('armor_pass').value) + Number(document.getElementById('slot1_runs_armor').value) + Number(document.getElementById('slot1_1_gravs_armor').value) + Number(document.getElementById('slot1_2_gravs_armor').value) + Number(document.getElementById('slot1_3_gravs_armor').value) + Number(document.getElementById('slot1_4_gravs_armor').value) + Number(document.getElementById('slot1_5_gravs_armor').value) + Number(document.getElementById('slot1_6_gravs_armor').value) + Number(document.getElementById('slot3_runs_armor').value) + Number(document.getElementById('slot3_1_gravs_armor').value) + Number(document.getElementById('slot3_2_gravs_armor').value) + Number(document.getElementById('slot3_3_gravs_armor').value) + Number(document.getElementById('slot3_4_gravs_armor').value) + Number(document.getElementById('slot3_5_gravs_armor').value) + Number(document.getElementById('slot3_6_gravs_armor').value) + Number(document.getElementById('slot3_7_gravs_armor').value) + Number(document.getElementById('slot4_runs_armor').value) + Number(document.getElementById('slot4_1_gravs_armor').value) + Number(document.getElementById('slot4_2_gravs_armor').value) + Number(document.getElementById('slot4_3_gravs_armor').value) + Number(document.getElementById('slot4_4_gravs_armor').value) + Number(document.getElementById('slot5_runs_armor').value) + Number(document.getElementById('slot5_1_gravs_armor').value) + Number(document.getElementById('slot5_2_gravs_armor').value) + Number(document.getElementById('slot5_3_gravs_armor').value) + Number(document.getElementById('slot5_4_gravs_armor').value) + Number(document.getElementById('slot5_5_gravs_armor').value) + Number(document.getElementById('slot5_6_gravs_armor').value) + Number(document.getElementById('slot6_runs_armor').value) + Number(document.getElementById('slot6_1_gravs_armor').value) + Number(document.getElementById('slot6_2_gravs_armor').value) + Number(document.getElementById('slot6_3_gravs_armor').value) + Number(document.getElementById('slot6_4_gravs_armor').value) + Number(document.getElementById('slot6_5_gravs_armor').value) + Number(document.getElementById('slot7_runs_armor').value) + Number(document.getElementById('slot7_1_gravs_armor').value) + Number(document.getElementById('slot7_2_gravs_armor').value) + Number(document.getElementById('slot7_3_gravs_armor').value) + Number(document.getElementById('slot7_4_gravs_armor').value) + Number(document.getElementById('slot7_5_gravs_armor').value) + Number(document.getElementById('slot8_runs_armor').value) + Number(document.getElementById('slot8_1_gravs_armor').value) + Number(document.getElementById('slot8_2_gravs_armor').value) + Number(document.getElementById('slot8_3_gravs_armor').value) + Number(document.getElementById('slot8_4_gravs_armor').value) + Number(document.getElementById('slot16_runs_armor').value) + Number(document.getElementById('slot16_1_gravs_armor').value) + Number(document.getElementById('slot16_2_gravs_armor').value) + Number(document.getElementById('slot16_3_gravs_armor').value) + Number(document.getElementById('slot16_4_gravs_armor').value) + Number(document.getElementById('slot16_5_gravs_armor').value) + Number(document.getElementById('slot16_6_gravs_armor').value) + Number(document.getElementById('slot16_7_gravs_armor').value) + Number(document.getElementById('slot17_runs_armor').value) + Number(document.getElementById('slot17_1_gravs_armor').value) + Number(document.getElementById('slot17_2_gravs_armor').value) + Number(document.getElementById('slot17_3_gravs_armor').value) + Number(document.getElementById('slot17_4_gravs_armor').value) + Number(document.getElementById('slot17_5_gravs_armor').value) + Number(document.getElementById('slot17_6_gravs_armor').value) + Number(document.getElementById('slot17_7_gravs_armor').value) + Number(document.getElementById('slot18_runs_armor').value) + Number(document.getElementById('slot18_1_gravs_armor').value) + Number(document.getElementById('slot18_2_gravs_armor').value) + Number(document.getElementById('slot18_3_gravs_armor').value) + Number(document.getElementById('slot18_4_gravs_armor').value) + Number(document.getElementById('slot18_5_gravs_armor').value) + Number(document.getElementById('slot18_6_gravs_armor').value) + Number(document.getElementById('slot18_7_gravs_armor').value) + Number(document.getElementById('slot19_runs_armor').value) + Number(document.getElementById('slot19_1_gravs_armor').value) + Number(document.getElementById('slot19_2_gravs_armor').value) + Number(document.getElementById('slot19_3_gravs_armor').value) + Number(document.getElementById('slot19_4_gravs_armor').value) + Number(document.getElementById('slot19_5_gravs_armor').value) + Number(document.getElementById('slot19_6_gravs_armor').value) + Number(document.getElementById('slot19_7_gravs_armor').value) + Number(document.getElementById('slot10_runs_armor').value) + Number(document.getElementById('slot11_runs_armor').value) + Number(document.getElementById('slot12_runs_armor').value) + Number(document.getElementById('slot13_runs_armor').value) + Number(document.getElementById('slot14_runs_armor').value) + Number(document.getElementById('slot15_runs_armor').value) + Number(document.getElementById('slot1_buff_ua_armor').value) + Number(document.getElementById('slot3_buff_ua_armor').value) + Number(document.getElementById('slot4_buff_ua_armor').value) + Number(document.getElementById('slot5_buff_ua_armor').value) + Number(document.getElementById('slot6_buff_ua_armor').value) + Number(document.getElementById('slot7_buff_ua_armor').value) + Number(document.getElementById('slot8_buff_ua_armor').value) + Number(document.getElementById('slot9_buff_ua_armor').value) + Number(document.getElementById('slot10_buff_ua_armor').value) + Number(document.getElementById('slot11_buff_ua_armor').value) + Number(document.getElementById('slot12_buff_ua_armor').value) + Number(document.getElementById('slot13_buff_ua_armor').value) + Number(document.getElementById('slot14_buff_ua_armor').value) + Number(document.getElementById('slot15_buff_ua_armor').value) + Number(document.getElementById('slot16_buff_ua_armor').value) + Number(document.getElementById('slot17_buff_ua_armor').value) + Number(document.getElementById('slot18_buff_ua_armor').value) + Number(document.getElementById('slot19_buff_ua_armor').value) + Number(document.getElementById('slot10_ua_time_armor').value) + summa(eiset_armor) + Number(document.getElementById('sets_buff_ua_armor').value) + Number(document.getElementById('weapons_buff_ua_armor').value) + Number(document.getElementById('title_buff_ua_armor').value) + Number(document.getElementById('slot9_d_buff_armor').value) + Number(document.getElementById('slot12_d_buff_armor').value) + Number(document.getElementById('slot13_d_buff_armor').value) + Number(document.getElementById('slot14_d_buff_armor').value) + Number(document.getElementById('slot15_d_buff_armor').value) + Number(document.getElementById('slot16_d_buff_armor').value) + Number(document.getElementById('slot17_d_buff_armor').value) + Number(document.getElementById('ele_4').value) + Number(document.getElementById('ele_5').value) + Number(document.getElementById('ele_6').value) + Number(document.getElementById('skill_buff_3').value) + Number(document.getElementById('skill_buff_19').value) + Number(document.getElementById('grade_buff_ua_armor').value) + Number(document.getElementById('sintez_k_0').value);


    var color_resist = 0 + Number(document.getElementById('magic_resist_pass').value)
        + Number(document.getElementById('magic_resist2_pass').value)
        + Number(document.getElementById('slot1_runs_magic_resist').value)
        + Number(document.getElementById('slot1_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot1_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot1_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot1_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot1_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot1_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_runs_magic_resist').value)
        + Number(document.getElementById('slot3_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot3_7_gravs_magic_resist').value)
        + Number(document.getElementById('slot4_runs_magic_resist').value)
        + Number(document.getElementById('slot4_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot4_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot4_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot4_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_runs_magic_resist').value)
        + Number(document.getElementById('slot5_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot5_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot6_runs_magic_resist').value)
        + Number(document.getElementById('slot6_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot6_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot6_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot6_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot6_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot7_runs_magic_resist').value)
        + Number(document.getElementById('slot7_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot7_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot7_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot7_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot7_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot8_runs_magic_resist').value)
        + Number(document.getElementById('slot8_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot8_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot8_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot8_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_runs_magic_resist').value)
        + Number(document.getElementById('slot16_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot16_7_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_runs_magic_resist').value)
        + Number(document.getElementById('slot17_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot17_7_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_runs_magic_resist').value)
        + Number(document.getElementById('slot18_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot18_7_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_runs_magic_resist').value)
        + Number(document.getElementById('slot19_1_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_2_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_3_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_4_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_5_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_6_gravs_magic_resist').value)
        + Number(document.getElementById('slot19_7_gravs_magic_resist').value)
        + Number(document.getElementById('slot10_runs_magic_resist').value)
        + Number(document.getElementById('slot11_runs_magic_resist').value)
        + Number(document.getElementById('slot12_runs_magic_resist').value)
        + Number(document.getElementById('slot13_runs_magic_resist').value)
        + Number(document.getElementById('slot14_runs_magic_resist').value)
        + Number(document.getElementById('slot15_runs_magic_resist').value)
        + Number(document.getElementById('slot1_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot3_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot4_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot5_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot6_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot7_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot8_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot9_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot10_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot11_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot12_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot13_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot14_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot15_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot16_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot17_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot18_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot19_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot10_ua_time_magic_resist').value)
        + summa(eiset_magic_resist)
        + Number(document.getElementById('sets_buff_ua_magic_resist').value)
        + Number(document.getElementById('weapons_buff_ua_magic_resist').value)
        + Number(document.getElementById('title_buff_ua_magic_resist').value)
        + Number(document.getElementById('slot9_d_buff_magic_resist').value)
        + Number(document.getElementById('slot12_d_buff_magic_resist').value)
        + Number(document.getElementById('slot13_d_buff_magic_resist').value)
        + Number(document.getElementById('slot14_d_buff_magic_resist').value)
        + Number(document.getElementById('slot15_d_buff_magic_resist').value)
        + Number(document.getElementById('slot16_d_buff_magic_resist').value)
        + Number(document.getElementById('slot17_d_buff_magic_resist').value)
        + Number(document.getElementById('sintez_12').value)
        + Number(document.getElementById('ele_1').value)
        + Number(document.getElementById('ele_2').value)
        + Number(document.getElementById('ele_3').value)
        + Number(document.getElementById('skill_buff_10').value)
        + Number(document.getElementById('skill_buff_19').value)
        + Number(document.getElementById('skill_buff_23').value)
        + Number(document.getElementById('sintez_k_1').value);

    var armor_proc = 0 + (Number(document.getElementById('slot10_ua_time_armor_proc').value) + Number(document.getElementById('slot10_buff_ua_armor_proc').value) + Number(document.getElementById('sets_buff_ua_armor_proc').value) + Number(document.getElementById('folik_1').value) + Number(document.getElementById('folik_2').value) + Number(document.getElementById('folik_3').value) + Number(document.getElementById('folik_4').value) + Number(document.getElementById('folik_5').value) + Number(document.getElementById('folik_6').value));

    var health_proc = 0 + Number(document.getElementById('sets_buff_ua_max_health_proc').value);
    var mana_proc = 0 + Number(document.getElementById('mana_pass').value);


    var armor = Math.round(Number(document.getElementById('slot1_ac').value) + Number(document.getElementById('slot3_ac').value) + Number(document.getElementById('slot4_ac').value) + Number(document.getElementById('slot5_ac').value) + Number(document.getElementById('slot6_ac').value) + Number(document.getElementById('slot7_ac').value) + Number(document.getElementById('slot8_ac').value) + Number(document.getElementById('slot9_ac').value) + Number(document.getElementById('slot17_ac').value) + color_armor + (Number(document.getElementById('slot1_ac').value) + Number(document.getElementById('slot3_ac').value) + Number(document.getElementById('slot4_ac').value) + Number(document.getElementById('slot5_ac').value) + Number(document.getElementById('slot6_ac').value) + Number(document.getElementById('slot7_ac').value) + Number(document.getElementById('slot8_ac').value) + Number(document.getElementById('slot9_ac').value) + Number(document.getElementById('slot17_ac').value) + color_armor) * armor_proc / 100);

    var resist_proc = 0 + Number(document.getElementById('skill_buff_16').value);

    var resist = Math.round(spi + Number(document.getElementById('slot1_mc').value) + Number(document.getElementById('slot3_mc').value) + Number(document.getElementById('slot4_mc').value) + Number(document.getElementById('slot5_mc').value) + Number(document.getElementById('slot6_mc').value) + Number(document.getElementById('slot7_mc').value) + Number(document.getElementById('slot8_mc').value) + Number(document.getElementById('slot9_mc').value) + color_resist + (spi + Number(document.getElementById('slot1_mc').value) + Number(document.getElementById('slot3_mc').value) + Number(document.getElementById('slot4_mc').value) + Number(document.getElementById('slot5_mc').value) + Number(document.getElementById('slot6_mc').value) + Number(document.getElementById('slot7_mc').value) + Number(document.getElementById('slot8_mc').value) + Number(document.getElementById('slot9_mc').value) + color_resist) * resist_proc / 100);


    document.getElementById('str').innerHTML = str;
    document.getElementById('sta').innerHTML = vit;
    document.getElementById('dex').innerHTML = dex;
    document.getElementById('int').innerHTML = intl;
    document.getElementById('spi').innerHTML = spi;

    var hp = 0 + Number(document.getElementById('health_pass').value) + Number(document.getElementById('slot1_runs_max_health').value) + Number(document.getElementById('slot1_1_gravs_max_health').value) + Number(document.getElementById('slot1_2_gravs_max_health').value) + Number(document.getElementById('slot1_3_gravs_max_health').value) + Number(document.getElementById('slot1_4_gravs_max_health').value) + Number(document.getElementById('slot1_5_gravs_max_health').value) + Number(document.getElementById('slot1_6_gravs_max_health').value) + Number(document.getElementById('slot3_runs_max_health').value) + Number(document.getElementById('slot3_1_gravs_max_health').value) + Number(document.getElementById('slot3_2_gravs_max_health').value) + Number(document.getElementById('slot3_3_gravs_max_health').value) + Number(document.getElementById('slot3_4_gravs_max_health').value) + Number(document.getElementById('slot3_5_gravs_max_health').value) + Number(document.getElementById('slot3_6_gravs_max_health').value) + Number(document.getElementById('slot3_7_gravs_max_health').value) + Number(document.getElementById('slot4_runs_max_health').value) + Number(document.getElementById('slot4_1_gravs_max_health').value) + Number(document.getElementById('slot4_2_gravs_max_health').value) + Number(document.getElementById('slot4_3_gravs_max_health').value) + Number(document.getElementById('slot4_4_gravs_max_health').value) + Number(document.getElementById('slot5_runs_max_health').value) + Number(document.getElementById('slot5_1_gravs_max_health').value) + Number(document.getElementById('slot5_2_gravs_max_health').value) + Number(document.getElementById('slot5_3_gravs_max_health').value) + Number(document.getElementById('slot5_4_gravs_max_health').value) + Number(document.getElementById('slot5_5_gravs_max_health').value) + Number(document.getElementById('slot5_6_gravs_max_health').value) + Number(document.getElementById('slot6_runs_max_health').value) + Number(document.getElementById('slot6_1_gravs_max_health').value) + Number(document.getElementById('slot6_2_gravs_max_health').value) + Number(document.getElementById('slot6_3_gravs_max_health').value) + Number(document.getElementById('slot6_4_gravs_max_health').value) + Number(document.getElementById('slot6_5_gravs_max_health').value) + Number(document.getElementById('slot7_runs_max_health').value) + Number(document.getElementById('slot7_1_gravs_max_health').value) + Number(document.getElementById('slot7_2_gravs_max_health').value) + Number(document.getElementById('slot7_3_gravs_max_health').value) + Number(document.getElementById('slot7_4_gravs_max_health').value) + Number(document.getElementById('slot7_5_gravs_max_health').value) + Number(document.getElementById('slot8_runs_max_health').value) + Number(document.getElementById('slot8_1_gravs_max_health').value) + Number(document.getElementById('slot8_2_gravs_max_health').value) + Number(document.getElementById('slot8_3_gravs_max_health').value) + Number(document.getElementById('slot8_4_gravs_max_health').value) + Number(document.getElementById('slot16_runs_max_health').value) + Number(document.getElementById('slot16_1_gravs_max_health').value) + Number(document.getElementById('slot16_2_gravs_max_health').value) + Number(document.getElementById('slot16_3_gravs_max_health').value) + Number(document.getElementById('slot16_4_gravs_max_health').value) + Number(document.getElementById('slot16_5_gravs_max_health').value) + Number(document.getElementById('slot16_6_gravs_max_health').value) + Number(document.getElementById('slot16_7_gravs_max_health').value) + Number(document.getElementById('slot17_runs_max_health').value) + Number(document.getElementById('slot17_1_gravs_max_health').value) + Number(document.getElementById('slot17_2_gravs_max_health').value) + Number(document.getElementById('slot17_3_gravs_max_health').value) + Number(document.getElementById('slot17_4_gravs_max_health').value) + Number(document.getElementById('slot17_5_gravs_max_health').value) + Number(document.getElementById('slot17_6_gravs_max_health').value) + Number(document.getElementById('slot17_7_gravs_max_health').value) + Number(document.getElementById('slot18_runs_max_health').value) + Number(document.getElementById('slot18_1_gravs_max_health').value) + Number(document.getElementById('slot18_2_gravs_max_health').value) + Number(document.getElementById('slot18_3_gravs_max_health').value) + Number(document.getElementById('slot18_4_gravs_max_health').value) + Number(document.getElementById('slot18_5_gravs_max_health').value) + Number(document.getElementById('slot18_6_gravs_max_health').value) + Number(document.getElementById('slot18_7_gravs_max_health').value) + Number(document.getElementById('slot19_runs_max_health').value) + Number(document.getElementById('slot19_1_gravs_max_health').value) + Number(document.getElementById('slot19_2_gravs_max_health').value) + Number(document.getElementById('slot19_3_gravs_max_health').value) + Number(document.getElementById('slot19_4_gravs_max_health').value) + Number(document.getElementById('slot19_5_gravs_max_health').value) + Number(document.getElementById('slot19_6_gravs_max_health').value) + Number(document.getElementById('slot19_7_gravs_max_health').value) + Number(document.getElementById('slot10_runs_max_health').value) + Number(document.getElementById('slot11_runs_max_health').value) + Number(document.getElementById('slot12_runs_max_health').value) + Number(document.getElementById('slot13_runs_max_health').value) + Number(document.getElementById('slot14_runs_max_health').value) + Number(document.getElementById('slot15_runs_max_health').value) + Number(document.getElementById('slot1_buff_ua_max_health').value) + Number(document.getElementById('slot3_buff_ua_max_health').value) + Number(document.getElementById('slot4_buff_ua_max_health').value) + Number(document.getElementById('slot5_buff_ua_max_health').value) + Number(document.getElementById('slot6_buff_ua_max_health').value) + Number(document.getElementById('slot7_buff_ua_max_health').value) + Number(document.getElementById('slot8_buff_ua_max_health').value) + Number(document.getElementById('slot9_buff_ua_max_health').value) + Number(document.getElementById('slot10_buff_ua_max_health').value) + Number(document.getElementById('slot11_buff_ua_max_health').value) + Number(document.getElementById('slot12_buff_ua_max_health').value) + Number(document.getElementById('slot13_buff_ua_max_health').value) + Number(document.getElementById('slot14_buff_ua_max_health').value) + Number(document.getElementById('slot15_buff_ua_max_health').value) + Number(document.getElementById('slot16_buff_ua_max_health').value) + Number(document.getElementById('slot17_buff_ua_max_health').value) + Number(document.getElementById('slot18_buff_ua_max_health').value) + Number(document.getElementById('slot19_buff_ua_max_health').value) + Number(document.getElementById('slot10_ua_time_max_health').value) + summa(eiset_max_health) + Number(document.getElementById('sets_buff_ua_max_health').value) + Number(document.getElementById('weapons_buff_ua_max_health').value) + Number(document.getElementById('grade_buff_ua_max_health').value) + Number(document.getElementById('title_buff_ua_max_health').value) + Number(document.getElementById('slot9_d_buff_max_health').value) + Number(document.getElementById('slot12_d_buff_max_health').value) + Number(document.getElementById('slot13_d_buff_max_health').value) + Number(document.getElementById('slot14_d_buff_max_health').value) + Number(document.getElementById('slot15_d_buff_max_health').value) + Number(document.getElementById('slot16_d_buff_max_health').value) + Number(document.getElementById('slot17_d_buff_max_health').value) + Number(document.getElementById('sintez_11').value) + Number(document.getElementById('svit_4').value) + Number(document.getElementById('nap_5').value) + Number(document.getElementById('nap_6').value) + Number(document.getElementById('nap_1').value) + Number(document.getElementById('nap_2').value) + Number(document.getElementById('nap_3').value) + Number(document.getElementById('nap_4').value) + Number(document.getElementById('skill_buff_12').value) + Number(document.getElementById('skill_buff_15').value) + Number(document.getElementById('pets_5').value) + Number(document.getElementById('sintez_k_2').value);

    document.getElementById('hp').innerHTML = Math.round((Number(document.getElementById('userlvl').value) * 150 + Number(vit) * 12 + 100 + hp) + (Number(document.getElementById('userlvl').value) * 150 + Number(vit) * 12 + 100 + hp) * health_proc / 100);


    var mp = 0 + Number(document.getElementById('slot1_runs_max_mana').value) + Number(document.getElementById('slot1_1_gravs_max_mana').value) + Number(document.getElementById('slot1_2_gravs_max_mana').value) + Number(document.getElementById('slot1_3_gravs_max_mana').value) + Number(document.getElementById('slot1_4_gravs_max_mana').value) + Number(document.getElementById('slot1_5_gravs_max_mana').value) + Number(document.getElementById('slot1_6_gravs_max_mana').value) + Number(document.getElementById('slot3_runs_max_mana').value) + Number(document.getElementById('slot3_1_gravs_max_mana').value) + Number(document.getElementById('slot3_2_gravs_max_mana').value) + Number(document.getElementById('slot3_3_gravs_max_mana').value) + Number(document.getElementById('slot3_4_gravs_max_mana').value) + Number(document.getElementById('slot3_5_gravs_max_mana').value) + Number(document.getElementById('slot3_6_gravs_max_mana').value) + Number(document.getElementById('slot3_7_gravs_max_mana').value) + Number(document.getElementById('slot4_runs_max_mana').value) + Number(document.getElementById('slot4_1_gravs_max_mana').value) + Number(document.getElementById('slot4_2_gravs_max_mana').value) + Number(document.getElementById('slot4_3_gravs_max_mana').value) + Number(document.getElementById('slot4_4_gravs_max_mana').value) + Number(document.getElementById('slot5_runs_max_mana').value) + Number(document.getElementById('slot5_1_gravs_max_mana').value) + Number(document.getElementById('slot5_2_gravs_max_mana').value) + Number(document.getElementById('slot5_3_gravs_max_mana').value) + Number(document.getElementById('slot5_4_gravs_max_mana').value) + Number(document.getElementById('slot5_5_gravs_max_mana').value) + Number(document.getElementById('slot5_6_gravs_max_mana').value) + Number(document.getElementById('slot6_runs_max_mana').value) + Number(document.getElementById('slot6_1_gravs_max_mana').value) + Number(document.getElementById('slot6_2_gravs_max_mana').value) + Number(document.getElementById('slot6_3_gravs_max_mana').value) + Number(document.getElementById('slot6_4_gravs_max_mana').value) + Number(document.getElementById('slot6_5_gravs_max_mana').value) + Number(document.getElementById('slot7_runs_max_mana').value) + Number(document.getElementById('slot7_1_gravs_max_mana').value) + Number(document.getElementById('slot7_2_gravs_max_mana').value) + Number(document.getElementById('slot7_3_gravs_max_mana').value) + Number(document.getElementById('slot7_4_gravs_max_mana').value) + Number(document.getElementById('slot7_5_gravs_max_mana').value) + Number(document.getElementById('slot8_runs_max_mana').value) + Number(document.getElementById('slot8_1_gravs_max_mana').value) + Number(document.getElementById('slot8_2_gravs_max_mana').value) + Number(document.getElementById('slot8_3_gravs_max_mana').value) + Number(document.getElementById('slot8_4_gravs_max_mana').value) + Number(document.getElementById('slot16_runs_max_mana').value) + Number(document.getElementById('slot16_1_gravs_max_mana').value) + Number(document.getElementById('slot16_2_gravs_max_mana').value) + Number(document.getElementById('slot16_3_gravs_max_mana').value) + Number(document.getElementById('slot16_4_gravs_max_mana').value) + Number(document.getElementById('slot16_5_gravs_max_mana').value) + Number(document.getElementById('slot16_6_gravs_max_mana').value) + Number(document.getElementById('slot16_7_gravs_max_mana').value) + Number(document.getElementById('slot17_runs_max_mana').value) + Number(document.getElementById('slot17_1_gravs_max_mana').value) + Number(document.getElementById('slot17_2_gravs_max_mana').value) + Number(document.getElementById('slot17_3_gravs_max_mana').value) + Number(document.getElementById('slot17_4_gravs_max_mana').value) + Number(document.getElementById('slot17_5_gravs_max_mana').value) + Number(document.getElementById('slot17_6_gravs_max_mana').value) + Number(document.getElementById('slot17_7_gravs_max_mana').value) + Number(document.getElementById('slot18_runs_max_mana').value) + Number(document.getElementById('slot18_1_gravs_max_mana').value) + Number(document.getElementById('slot18_2_gravs_max_mana').value) + Number(document.getElementById('slot18_3_gravs_max_mana').value) + Number(document.getElementById('slot18_4_gravs_max_mana').value) + Number(document.getElementById('slot18_5_gravs_max_mana').value) + Number(document.getElementById('slot18_6_gravs_max_mana').value) + Number(document.getElementById('slot18_7_gravs_max_mana').value) + Number(document.getElementById('slot19_runs_max_mana').value) + Number(document.getElementById('slot19_1_gravs_max_mana').value) + Number(document.getElementById('slot19_2_gravs_max_mana').value) + Number(document.getElementById('slot19_3_gravs_max_mana').value) + Number(document.getElementById('slot19_4_gravs_max_mana').value) + Number(document.getElementById('slot19_5_gravs_max_mana').value) + Number(document.getElementById('slot19_6_gravs_max_mana').value) + Number(document.getElementById('slot19_7_gravs_max_mana').value) + Number(document.getElementById('slot10_runs_max_mana').value) + Number(document.getElementById('slot11_runs_max_mana').value) + Number(document.getElementById('slot12_runs_max_mana').value) + Number(document.getElementById('slot13_runs_max_mana').value) + Number(document.getElementById('slot14_runs_max_mana').value) + Number(document.getElementById('slot15_runs_max_mana').value) + Number(document.getElementById('slot1_buff_ua_max_mana').value) + Number(document.getElementById('slot3_buff_ua_max_mana').value) + Number(document.getElementById('slot4_buff_ua_max_mana').value) + Number(document.getElementById('slot5_buff_ua_max_mana').value) + Number(document.getElementById('slot6_buff_ua_max_mana').value) + Number(document.getElementById('slot7_buff_ua_max_mana').value) + Number(document.getElementById('slot8_buff_ua_max_mana').value) + Number(document.getElementById('slot9_buff_ua_max_mana').value) + Number(document.getElementById('slot10_buff_ua_max_mana').value) + Number(document.getElementById('slot11_buff_ua_max_mana').value) + Number(document.getElementById('slot12_buff_ua_max_mana').value) + Number(document.getElementById('slot13_buff_ua_max_mana').value) + Number(document.getElementById('slot14_buff_ua_max_mana').value) + Number(document.getElementById('slot15_buff_ua_max_mana').value) + Number(document.getElementById('slot16_buff_ua_max_mana').value) + Number(document.getElementById('slot17_buff_ua_max_mana').value) + Number(document.getElementById('slot18_buff_ua_max_mana').value) + Number(document.getElementById('slot19_buff_ua_max_mana').value) + Number(document.getElementById('slot10_ua_time_max_mana').value) + summa(eiset_max_mana) + Number(document.getElementById('sets_buff_ua_max_mana').value) + Number(document.getElementById('weapons_buff_ua_max_mana').value) + Number(document.getElementById('grade_buff_ua_max_mana').value) + Number(document.getElementById('title_buff_ua_max_mana').value) + Number(document.getElementById('slot9_d_buff_max_mana').value) + Number(document.getElementById('slot12_d_buff_max_mana').value) + Number(document.getElementById('slot13_d_buff_max_mana').value) + Number(document.getElementById('slot14_d_buff_max_mana').value) + Number(document.getElementById('slot15_d_buff_max_mana').value) + Number(document.getElementById('slot16_d_buff_max_mana').value) + Number(document.getElementById('slot17_d_buff_max_mana').value) + Number(document.getElementById('svit_4').value) + Number(document.getElementById('nap_10').value) + Number(document.getElementById('nap_12').value) + Number(document.getElementById('nap_9').value) + Number(document.getElementById('nap_11').value) + Number(document.getElementById('nap_7').value) + Number(document.getElementById('nap_8').value) + Number(document.getElementById('pets_5').value) + Number(document.getElementById('sintez_15').value);

    document.getElementById('mp').innerHTML = Math.round((Number(document.getElementById('userlvl').value) * 100 + Number(intl) * 12 + 100 + mp) + (Number(document.getElementById('userlvl').value) * 100 + Number(intl) * 12 + 100 + mp) * mana_proc / 100);

    document.getElementById('tacktVal').innerHTML = 0 + Number(document.getElementById('slot1_runs_tackt').value) + Number(document.getElementById('slot1_1_gravs_tackt').value) + Number(document.getElementById('slot1_2_gravs_tackt').value) + Number(document.getElementById('slot1_3_gravs_tackt').value) + Number(document.getElementById('slot1_4_gravs_tackt').value) + Number(document.getElementById('slot1_5_gravs_tackt').value) + Number(document.getElementById('slot1_6_gravs_tackt').value) + Number(document.getElementById('slot1_7_gravs_tackt').value) + Number(document.getElementById('slot3_runs_tackt').value) + Number(document.getElementById('slot3_1_gravs_tackt').value) + Number(document.getElementById('slot3_2_gravs_tackt').value) + Number(document.getElementById('slot3_3_gravs_tackt').value) + Number(document.getElementById('slot3_4_gravs_tackt').value) + Number(document.getElementById('slot3_5_gravs_tackt').value) + Number(document.getElementById('slot3_6_gravs_tackt').value) + Number(document.getElementById('slot3_7_gravs_tackt').value) + Number(document.getElementById('slot4_runs_tackt').value) + Number(document.getElementById('slot4_1_gravs_tackt').value) + Number(document.getElementById('slot4_2_gravs_tackt').value) + Number(document.getElementById('slot4_3_gravs_tackt').value) + Number(document.getElementById('slot4_4_gravs_tackt').value) + Number(document.getElementById('slot4_5_gravs_tackt').value) + Number(document.getElementById('slot4_6_gravs_tackt').value) + Number(document.getElementById('slot4_7_gravs_tackt').value) + Number(document.getElementById('slot5_runs_tackt').value) + Number(document.getElementById('slot5_1_gravs_tackt').value) + Number(document.getElementById('slot5_2_gravs_tackt').value) + Number(document.getElementById('slot5_3_gravs_tackt').value) + Number(document.getElementById('slot5_4_gravs_tackt').value) + Number(document.getElementById('slot5_5_gravs_tackt').value) + Number(document.getElementById('slot5_6_gravs_tackt').value) + Number(document.getElementById('slot5_7_gravs_tackt').value) + Number(document.getElementById('slot6_runs_tackt').value) + Number(document.getElementById('slot6_1_gravs_tackt').value) + Number(document.getElementById('slot6_2_gravs_tackt').value) + Number(document.getElementById('slot6_3_gravs_tackt').value) + Number(document.getElementById('slot6_4_gravs_tackt').value) + Number(document.getElementById('slot6_5_gravs_tackt').value) + Number(document.getElementById('slot6_6_gravs_tackt').value) + Number(document.getElementById('slot6_7_gravs_tackt').value) + Number(document.getElementById('slot7_runs_tackt').value) + Number(document.getElementById('slot7_1_gravs_tackt').value) + Number(document.getElementById('slot7_2_gravs_tackt').value) + Number(document.getElementById('slot7_3_gravs_tackt').value) + Number(document.getElementById('slot7_4_gravs_tackt').value) + Number(document.getElementById('slot7_5_gravs_tackt').value) + Number(document.getElementById('slot7_6_gravs_tackt').value) + Number(document.getElementById('slot7_7_gravs_tackt').value) + Number(document.getElementById('slot8_runs_tackt').value) + Number(document.getElementById('slot8_1_gravs_tackt').value) + Number(document.getElementById('slot8_2_gravs_tackt').value) + Number(document.getElementById('slot8_3_gravs_tackt').value) + Number(document.getElementById('slot8_4_gravs_tackt').value) + Number(document.getElementById('slot8_5_gravs_tackt').value) + Number(document.getElementById('slot8_6_gravs_tackt').value) + Number(document.getElementById('slot8_7_gravs_tackt').value) + Number(document.getElementById('slot9_runs_tackt').value) + Number(document.getElementById('slot9_1_gravs_tackt').value) + Number(document.getElementById('slot9_2_gravs_tackt').value) + Number(document.getElementById('slot9_3_gravs_tackt').value) + Number(document.getElementById('slot9_4_gravs_tackt').value) + Number(document.getElementById('slot9_5_gravs_tackt').value) + Number(document.getElementById('slot9_6_gravs_tackt').value) + Number(document.getElementById('slot9_7_gravs_tackt').value) + Number(document.getElementById('slot16_runs_tackt').value) + Number(document.getElementById('slot16_1_gravs_tackt').value) + Number(document.getElementById('slot16_2_gravs_tackt').value) + Number(document.getElementById('slot16_3_gravs_tackt').value) + Number(document.getElementById('slot16_4_gravs_tackt').value) + Number(document.getElementById('slot16_5_gravs_tackt').value) + Number(document.getElementById('slot16_6_gravs_tackt').value) + Number(document.getElementById('slot16_7_gravs_tackt').value) + Number(document.getElementById('slot17_runs_tackt').value) + Number(document.getElementById('slot17_1_gravs_tackt').value) + Number(document.getElementById('slot17_2_gravs_tackt').value) + Number(document.getElementById('slot17_3_gravs_tackt').value) + Number(document.getElementById('slot17_4_gravs_tackt').value) + Number(document.getElementById('slot17_5_gravs_tackt').value) + Number(document.getElementById('slot17_6_gravs_tackt').value) + Number(document.getElementById('slot17_7_gravs_tackt').value) + Number(document.getElementById('slot18_runs_tackt').value) + Number(document.getElementById('slot18_1_gravs_tackt').value) + Number(document.getElementById('slot18_2_gravs_tackt').value) + Number(document.getElementById('slot18_3_gravs_tackt').value) + Number(document.getElementById('slot18_4_gravs_tackt').value) + Number(document.getElementById('slot18_5_gravs_tackt').value) + Number(document.getElementById('slot18_6_gravs_tackt').value) + Number(document.getElementById('slot18_7_gravs_tackt').value) + Number(document.getElementById('slot19_runs_tackt').value) + Number(document.getElementById('slot19_1_gravs_tackt').value) + Number(document.getElementById('slot19_2_gravs_tackt').value) + Number(document.getElementById('slot19_3_gravs_tackt').value) + Number(document.getElementById('slot19_4_gravs_tackt').value) + Number(document.getElementById('slot19_5_gravs_tackt').value) + Number(document.getElementById('slot19_6_gravs_tackt').value) + Number(document.getElementById('slot19_7_gravs_tackt').value) + Number(document.getElementById('slot10_runs_tackt').value) + Number(document.getElementById('slot11_runs_tackt').value) + Number(document.getElementById('slot12_runs_tackt').value) + Number(document.getElementById('slot13_runs_tackt').value) + Number(document.getElementById('slot14_runs_tackt').value) + Number(document.getElementById('slot15_runs_tackt').value) + Number(document.getElementById('slot1_buff_ua_bulls_eye').value) + Number(document.getElementById('slot3_buff_ua_bulls_eye').value) + Number(document.getElementById('slot4_buff_ua_bulls_eye').value) + Number(document.getElementById('slot5_buff_ua_bulls_eye').value) + Number(document.getElementById('slot6_buff_ua_bulls_eye').value) + Number(document.getElementById('slot7_buff_ua_bulls_eye').value) + Number(document.getElementById('slot8_buff_ua_bulls_eye').value) + Number(document.getElementById('slot9_buff_ua_bulls_eye').value) + Number(document.getElementById('slot10_buff_ua_bulls_eye').value) + Number(document.getElementById('slot11_buff_ua_bulls_eye').value) + Number(document.getElementById('slot12_buff_ua_bulls_eye').value) + Number(document.getElementById('slot13_buff_ua_bulls_eye').value) + Number(document.getElementById('slot14_buff_ua_bulls_eye').value) + Number(document.getElementById('slot15_buff_ua_bulls_eye').value) + Number(document.getElementById('slot16_buff_ua_bulls_eye').value) + Number(document.getElementById('slot17_buff_ua_bulls_eye').value) + Number(document.getElementById('slot18_buff_ua_bulls_eye').value) + Number(document.getElementById('slot19_buff_ua_bulls_eye').value) + Number(document.getElementById('slot10_ua_time_bulls_eye').value) + Number(document.getElementById('slot4_d_buff_tackt').value) + Number(document.getElementById('slot8_d_buff_tackt').value) + Number(document.getElementById('slot9_d_buff_tackt').value) + Number(document.getElementById('slot16_d_buff_tackt').value) + Number(document.getElementById('slot17_d_buff_tackt').value) + Number(document.getElementById('fial_2').value) + Number(document.getElementById('svit_a_3').value) + Number(document.getElementById('sintez_22').value) + Number(document.getElementById('sintez_k_14').value);

    document.getElementById('pvpVal').innerHTML = 0 + Number(document.getElementById('slot1_runs_pvp').value) + Number(document.getElementById('slot1_1_gravs_pvp').value) + Number(document.getElementById('slot1_2_gravs_pvp').value) + Number(document.getElementById('slot1_3_gravs_pvp').value) + Number(document.getElementById('slot1_4_gravs_pvp').value) + Number(document.getElementById('slot1_5_gravs_pvp').value) + Number(document.getElementById('slot1_6_gravs_pvp').value) + Number(document.getElementById('slot1_7_gravs_pvp').value) + Number(document.getElementById('slot3_runs_pvp').value) + Number(document.getElementById('slot3_1_gravs_pvp').value) + Number(document.getElementById('slot3_2_gravs_pvp').value) + Number(document.getElementById('slot3_3_gravs_pvp').value) + Number(document.getElementById('slot3_4_gravs_pvp').value) + Number(document.getElementById('slot3_5_gravs_pvp').value) + Number(document.getElementById('slot3_6_gravs_pvp').value) + Number(document.getElementById('slot3_7_gravs_pvp').value) + Number(document.getElementById('slot4_runs_pvp').value) + Number(document.getElementById('slot4_1_gravs_pvp').value) + Number(document.getElementById('slot4_2_gravs_pvp').value) + Number(document.getElementById('slot4_3_gravs_pvp').value) + Number(document.getElementById('slot4_4_gravs_pvp').value) + Number(document.getElementById('slot4_5_gravs_pvp').value) + Number(document.getElementById('slot4_6_gravs_pvp').value) + Number(document.getElementById('slot4_7_gravs_pvp').value) + Number(document.getElementById('slot5_runs_pvp').value) + Number(document.getElementById('slot5_1_gravs_pvp').value) + Number(document.getElementById('slot5_2_gravs_pvp').value) + Number(document.getElementById('slot5_3_gravs_pvp').value) + Number(document.getElementById('slot5_4_gravs_pvp').value) + Number(document.getElementById('slot5_5_gravs_pvp').value) + Number(document.getElementById('slot5_6_gravs_pvp').value) + Number(document.getElementById('slot5_7_gravs_pvp').value) + Number(document.getElementById('slot6_runs_pvp').value) + Number(document.getElementById('slot6_1_gravs_pvp').value) + Number(document.getElementById('slot6_2_gravs_pvp').value) + Number(document.getElementById('slot6_3_gravs_pvp').value) + Number(document.getElementById('slot6_4_gravs_pvp').value) + Number(document.getElementById('slot6_5_gravs_pvp').value) + Number(document.getElementById('slot6_6_gravs_pvp').value) + Number(document.getElementById('slot6_7_gravs_pvp').value) + Number(document.getElementById('slot7_runs_pvp').value) + Number(document.getElementById('slot7_1_gravs_pvp').value) + Number(document.getElementById('slot7_2_gravs_pvp').value) + Number(document.getElementById('slot7_3_gravs_pvp').value) + Number(document.getElementById('slot7_4_gravs_pvp').value) + Number(document.getElementById('slot7_5_gravs_pvp').value) + Number(document.getElementById('slot7_6_gravs_pvp').value) + Number(document.getElementById('slot7_7_gravs_pvp').value) + Number(document.getElementById('slot8_runs_pvp').value) + Number(document.getElementById('slot8_1_gravs_pvp').value) + Number(document.getElementById('slot8_2_gravs_pvp').value) + Number(document.getElementById('slot8_3_gravs_pvp').value) + Number(document.getElementById('slot8_4_gravs_pvp').value) + Number(document.getElementById('slot8_5_gravs_pvp').value) + Number(document.getElementById('slot8_6_gravs_pvp').value) + Number(document.getElementById('slot8_7_gravs_pvp').value) + Number(document.getElementById('slot9_runs_pvp').value) + Number(document.getElementById('slot9_1_gravs_pvp').value) + Number(document.getElementById('slot9_2_gravs_pvp').value) + Number(document.getElementById('slot9_3_gravs_pvp').value) + Number(document.getElementById('slot9_4_gravs_pvp').value) + Number(document.getElementById('slot9_5_gravs_pvp').value) + Number(document.getElementById('slot9_6_gravs_pvp').value) + Number(document.getElementById('slot9_7_gravs_pvp').value) + Number(document.getElementById('slot16_runs_pvp').value) + Number(document.getElementById('slot16_1_gravs_pvp').value) + Number(document.getElementById('slot16_2_gravs_pvp').value) + Number(document.getElementById('slot16_3_gravs_pvp').value) + Number(document.getElementById('slot16_4_gravs_pvp').value) + Number(document.getElementById('slot16_5_gravs_pvp').value) + Number(document.getElementById('slot16_6_gravs_pvp').value) + Number(document.getElementById('slot16_7_gravs_pvp').value) + Number(document.getElementById('slot17_runs_pvp').value) + Number(document.getElementById('slot17_1_gravs_pvp').value) + Number(document.getElementById('slot17_2_gravs_pvp').value) + Number(document.getElementById('slot17_3_gravs_pvp').value) + Number(document.getElementById('slot17_4_gravs_pvp').value) + Number(document.getElementById('slot17_5_gravs_pvp').value) + Number(document.getElementById('slot17_6_gravs_pvp').value) + Number(document.getElementById('slot17_7_gravs_pvp').value) + Number(document.getElementById('slot18_runs_pvp').value) + Number(document.getElementById('slot18_1_gravs_pvp').value) + Number(document.getElementById('slot18_2_gravs_pvp').value) + Number(document.getElementById('slot18_3_gravs_pvp').value) + Number(document.getElementById('slot18_4_gravs_pvp').value) + Number(document.getElementById('slot18_5_gravs_pvp').value) + Number(document.getElementById('slot18_6_gravs_pvp').value) + Number(document.getElementById('slot18_7_gravs_pvp').value) + Number(document.getElementById('slot19_runs_pvp').value) + Number(document.getElementById('slot19_1_gravs_pvp').value) + Number(document.getElementById('slot19_2_gravs_pvp').value) + Number(document.getElementById('slot19_3_gravs_pvp').value) + Number(document.getElementById('slot19_4_gravs_pvp').value) + Number(document.getElementById('slot19_5_gravs_pvp').value) + Number(document.getElementById('slot19_6_gravs_pvp').value) + Number(document.getElementById('slot19_7_gravs_pvp').value) + Number(document.getElementById('slot10_runs_pvp').value) + Number(document.getElementById('slot11_runs_pvp').value) + Number(document.getElementById('slot12_runs_pvp').value) + Number(document.getElementById('slot13_runs_pvp').value) + Number(document.getElementById('slot14_runs_pvp').value) + Number(document.getElementById('slot15_runs_pvp').value) + Number(document.getElementById('slot11_buff_ua_pvp').value) + Number(document.getElementById('slot4_d_buff_pvp').value) + Number(document.getElementById('slot8_d_buff_pvp').value) + Number(document.getElementById('slot9_d_buff_pvp').value) + Number(document.getElementById('slot16_d_buff_pvp').value) + Number(document.getElementById('slot17_d_buff_pvp').value) + Number(document.getElementById('fial_3').value) + Number(document.getElementById('slot10_ua_time_pvp').value) + Number(document.getElementById('svit_a_1').value) + Number(document.getElementById('sintez_k_15').value);

    document.getElementById('critVal').innerHTML = 0 + Number(document.getElementById('slot1_runs_crit').value) + Number(document.getElementById('slot1_1_gravs_crit').value) + Number(document.getElementById('slot1_2_gravs_crit').value) + Number(document.getElementById('slot1_3_gravs_crit').value) + Number(document.getElementById('slot1_4_gravs_crit').value) + Number(document.getElementById('slot1_5_gravs_crit').value) + Number(document.getElementById('slot1_6_gravs_crit').value) + Number(document.getElementById('slot1_7_gravs_crit').value) + Number(document.getElementById('slot3_runs_crit').value) + Number(document.getElementById('slot3_1_gravs_crit').value) + Number(document.getElementById('slot3_2_gravs_crit').value) + Number(document.getElementById('slot3_3_gravs_crit').value) + Number(document.getElementById('slot3_4_gravs_crit').value) + Number(document.getElementById('slot3_5_gravs_crit').value) + Number(document.getElementById('slot3_6_gravs_crit').value) + Number(document.getElementById('slot3_7_gravs_crit').value) + Number(document.getElementById('slot4_runs_crit').value) + Number(document.getElementById('slot4_1_gravs_crit').value) + Number(document.getElementById('slot4_2_gravs_crit').value) + Number(document.getElementById('slot4_3_gravs_crit').value) + Number(document.getElementById('slot4_4_gravs_crit').value) + Number(document.getElementById('slot4_5_gravs_crit').value) + Number(document.getElementById('slot4_6_gravs_crit').value) + Number(document.getElementById('slot4_7_gravs_crit').value) + Number(document.getElementById('slot5_runs_crit').value) + Number(document.getElementById('slot5_1_gravs_crit').value) + Number(document.getElementById('slot5_2_gravs_crit').value) + Number(document.getElementById('slot5_3_gravs_crit').value) + Number(document.getElementById('slot5_4_gravs_crit').value) + Number(document.getElementById('slot5_5_gravs_crit').value) + Number(document.getElementById('slot5_6_gravs_crit').value) + Number(document.getElementById('slot5_7_gravs_crit').value) + Number(document.getElementById('slot6_runs_crit').value) + Number(document.getElementById('slot6_1_gravs_crit').value) + Number(document.getElementById('slot6_2_gravs_crit').value) + Number(document.getElementById('slot6_3_gravs_crit').value) + Number(document.getElementById('slot6_4_gravs_crit').value) + Number(document.getElementById('slot6_5_gravs_crit').value) + Number(document.getElementById('slot6_6_gravs_crit').value) + Number(document.getElementById('slot6_7_gravs_crit').value) + Number(document.getElementById('slot7_runs_crit').value) + Number(document.getElementById('slot7_1_gravs_crit').value) + Number(document.getElementById('slot7_2_gravs_crit').value) + Number(document.getElementById('slot7_3_gravs_crit').value) + Number(document.getElementById('slot7_4_gravs_crit').value) + Number(document.getElementById('slot7_5_gravs_crit').value) + Number(document.getElementById('slot7_6_gravs_crit').value) + Number(document.getElementById('slot7_7_gravs_crit').value) + Number(document.getElementById('slot8_runs_crit').value) + Number(document.getElementById('slot8_1_gravs_crit').value) + Number(document.getElementById('slot8_2_gravs_crit').value) + Number(document.getElementById('slot8_3_gravs_crit').value) + Number(document.getElementById('slot8_4_gravs_crit').value) + Number(document.getElementById('slot8_5_gravs_crit').value) + Number(document.getElementById('slot8_6_gravs_crit').value) + Number(document.getElementById('slot8_7_gravs_crit').value) + Number(document.getElementById('slot9_runs_crit').value) + Number(document.getElementById('slot9_1_gravs_crit').value) + Number(document.getElementById('slot9_2_gravs_crit').value) + Number(document.getElementById('slot9_3_gravs_crit').value) + Number(document.getElementById('slot9_4_gravs_crit').value) + Number(document.getElementById('slot9_5_gravs_crit').value) + Number(document.getElementById('slot9_6_gravs_crit').value) + Number(document.getElementById('slot9_7_gravs_crit').value) + Number(document.getElementById('slot16_runs_crit').value) + Number(document.getElementById('slot16_1_gravs_crit').value) + Number(document.getElementById('slot16_2_gravs_crit').value) + Number(document.getElementById('slot16_3_gravs_crit').value) + Number(document.getElementById('slot16_4_gravs_crit').value) + Number(document.getElementById('slot16_5_gravs_crit').value) + Number(document.getElementById('slot16_6_gravs_crit').value) + Number(document.getElementById('slot16_7_gravs_crit').value) + Number(document.getElementById('slot17_runs_crit').value) + Number(document.getElementById('slot17_1_gravs_crit').value) + Number(document.getElementById('slot17_2_gravs_crit').value) + Number(document.getElementById('slot17_3_gravs_crit').value) + Number(document.getElementById('slot17_4_gravs_crit').value) + Number(document.getElementById('slot17_5_gravs_crit').value) + Number(document.getElementById('slot17_6_gravs_crit').value) + Number(document.getElementById('slot17_7_gravs_crit').value) + Number(document.getElementById('slot18_runs_crit').value) + Number(document.getElementById('slot18_1_gravs_crit').value) + Number(document.getElementById('slot18_2_gravs_crit').value) + Number(document.getElementById('slot18_3_gravs_crit').value) + Number(document.getElementById('slot18_4_gravs_crit').value) + Number(document.getElementById('slot18_5_gravs_crit').value) + Number(document.getElementById('slot18_6_gravs_crit').value) + Number(document.getElementById('slot18_7_gravs_crit').value) + Number(document.getElementById('slot19_runs_crit').value) + Number(document.getElementById('slot19_1_gravs_crit').value) + Number(document.getElementById('slot19_2_gravs_crit').value) + Number(document.getElementById('slot19_3_gravs_crit').value) + Number(document.getElementById('slot19_4_gravs_crit').value) + Number(document.getElementById('slot19_5_gravs_crit').value) + Number(document.getElementById('slot19_6_gravs_crit').value) + Number(document.getElementById('slot19_7_gravs_crit').value) + Number(document.getElementById('slot10_runs_crit').value) + Number(document.getElementById('slot11_runs_crit').value) + Number(document.getElementById('slot12_runs_crit').value) + Number(document.getElementById('slot13_runs_crit').value) + Number(document.getElementById('slot14_runs_crit').value) + Number(document.getElementById('slot15_runs_crit').value) + Number(document.getElementById('slot10_ua_time_flexibility').value) + Number(document.getElementById('slot4_d_buff_crit').value) + Number(document.getElementById('slot8_d_buff_crit').value) + Number(document.getElementById('slot9_d_buff_crit').value) + Number(document.getElementById('slot16_d_buff_crit').value) + Number(document.getElementById('slot17_d_buff_crit').value) + Number(document.getElementById('fial_1').value) + Number(document.getElementById('svit_a_2').value) + Number(document.getElementById('sintez_23').value) + Number(document.getElementById('sintez_k_13').value) + Number(document.getElementById('slot11_buff_ua_crit').value);

    document.getElementById('ignore_armorVal').innerHTML = 0 + Number(document.getElementById('slot18_runs_ignore_armor').value) + Number(document.getElementById('slot18_1_gravs_ignore_armor').value) + Number(document.getElementById('slot18_2_gravs_ignore_armor').value) + Number(document.getElementById('slot18_3_gravs_ignore_armor').value) + Number(document.getElementById('slot18_4_gravs_ignore_armor').value) + Number(document.getElementById('slot18_5_gravs_ignore_armor').value) + Number(document.getElementById('slot18_6_gravs_ignore_armor').value) + Number(document.getElementById('slot18_7_gravs_ignore_armor').value) + Number(document.getElementById('slot19_runs_ignore_armor').value) + Number(document.getElementById('slot19_1_gravs_ignore_armor').value) + Number(document.getElementById('slot19_2_gravs_ignore_armor').value) + Number(document.getElementById('slot19_3_gravs_ignore_armor').value) + Number(document.getElementById('slot19_4_gravs_ignore_armor').value) + Number(document.getElementById('slot19_5_gravs_ignore_armor').value) + Number(document.getElementById('slot19_6_gravs_ignore_armor').value) + Number(document.getElementById('slot19_7_gravs_ignore_armor').value) + Number(document.getElementById('slot10_runs_ignore_armor').value) + Number(document.getElementById('slot11_runs_ignore_armor').value) + Number(document.getElementById('slot12_runs_ignore_armor').value) + Number(document.getElementById('slot13_runs_ignore_armor').value) + Number(document.getElementById('slot14_runs_ignore_armor').value) + Number(document.getElementById('slot15_runs_ignore_armor').value) + Number(document.getElementById('slot1_buff_ua_ignore_armor').value) + Number(document.getElementById('slot3_buff_ua_ignore_armor').value) + Number(document.getElementById('slot4_buff_ua_ignore_armor').value) + Number(document.getElementById('slot5_buff_ua_ignore_armor').value) + Number(document.getElementById('slot6_buff_ua_ignore_armor').value) + Number(document.getElementById('slot7_buff_ua_ignore_armor').value) + Number(document.getElementById('slot8_buff_ua_ignore_armor').value) + Number(document.getElementById('slot9_buff_ua_ignore_armor').value) + Number(document.getElementById('slot10_buff_ua_ignore_armor').value) + Number(document.getElementById('slot11_buff_ua_ignore_armor').value) + Number(document.getElementById('slot12_buff_ua_ignore_armor').value) + Number(document.getElementById('slot13_buff_ua_ignore_armor').value) + Number(document.getElementById('slot14_buff_ua_ignore_armor').value) + Number(document.getElementById('slot15_buff_ua_ignore_armor').value) + Number(document.getElementById('slot16_buff_ua_ignore_armor').value) + Number(document.getElementById('slot17_buff_ua_ignore_armor').value) + Number(document.getElementById('slot18_buff_ua_ignore_armor').value) + Number(document.getElementById('slot19_buff_ua_ignore_armor').value) + Number(document.getElementById('slot10_ua_time_ignore_armor').value) + summa(eiset_ignore_armor) + Number(document.getElementById('grade_buff_ua_ignore_armor').value) + Number(document.getElementById('weapons_buff_ua_ignore_armor').value) + Number(document.getElementById('title_buff_ua_ignore_armor').value) + Number(document.getElementById('sintez_10').value) + Number(document.getElementById('sintez_k_16').value);

    document.getElementById('magic_penetrationVal').innerHTML = 0 + Number(document.getElementById('slot18_runs_magic_penetration').value) + Number(document.getElementById('slot18_1_gravs_magic_penetration').value) + Number(document.getElementById('slot18_2_gravs_magic_penetration').value) + Number(document.getElementById('slot18_3_gravs_magic_penetration').value) + Number(document.getElementById('slot18_4_gravs_magic_penetration').value) + Number(document.getElementById('slot18_5_gravs_magic_penetration').value) + Number(document.getElementById('slot18_6_gravs_magic_penetration').value) + Number(document.getElementById('slot18_7_gravs_magic_penetration').value) + Number(document.getElementById('slot19_runs_magic_penetration').value) + Number(document.getElementById('slot19_1_gravs_magic_penetration').value) + Number(document.getElementById('slot19_2_gravs_magic_penetration').value) + Number(document.getElementById('slot19_3_gravs_magic_penetration').value) + Number(document.getElementById('slot19_4_gravs_magic_penetration').value) + Number(document.getElementById('slot19_5_gravs_magic_penetration').value) + Number(document.getElementById('slot19_6_gravs_magic_penetration').value) + Number(document.getElementById('slot19_7_gravs_magic_penetration').value) + Number(document.getElementById('slot10_runs_magic_penetration').value) + Number(document.getElementById('slot11_runs_magic_penetration').value) + Number(document.getElementById('slot12_runs_magic_penetration').value) + Number(document.getElementById('slot13_runs_magic_penetration').value) + Number(document.getElementById('slot14_runs_magic_penetration').value) + Number(document.getElementById('slot15_runs_magic_penetration').value) + Number(document.getElementById('slot1_buff_ua_magic_penetration').value) + Number(document.getElementById('slot3_buff_ua_magic_penetration').value) + Number(document.getElementById('slot4_buff_ua_magic_penetration').value) + Number(document.getElementById('slot5_buff_ua_magic_penetration').value) + Number(document.getElementById('slot6_buff_ua_magic_penetration').value) + Number(document.getElementById('slot7_buff_ua_magic_penetration').value) + Number(document.getElementById('slot8_buff_ua_magic_penetration').value) + Number(document.getElementById('slot9_buff_ua_magic_penetration').value) + Number(document.getElementById('slot10_buff_ua_magic_penetration').value) + Number(document.getElementById('slot11_buff_ua_magic_penetration').value) + Number(document.getElementById('slot12_buff_ua_magic_penetration').value) + Number(document.getElementById('slot13_buff_ua_magic_penetration').value) + Number(document.getElementById('slot14_buff_ua_magic_penetration').value) + Number(document.getElementById('slot15_buff_ua_magic_penetration').value) + Number(document.getElementById('slot16_buff_ua_magic_penetration').value) + Number(document.getElementById('slot17_buff_ua_magic_penetration').value) + Number(document.getElementById('slot18_buff_ua_magic_penetration').value) + Number(document.getElementById('slot19_buff_ua_magic_penetration').value) + Number(document.getElementById('slot10_ua_time_magic_penetration').value) + summa(eiset_magic_penetration) + Number(document.getElementById('grade_buff_ua_magic_penetration').value) + Number(document.getElementById('weapons_buff_ua_magic_penetration').value) + Number(document.getElementById('title_buff_ua_magic_penetration').value) + Number(document.getElementById('sintez_9').value) + Number(document.getElementById('sintez_k_17').value);

    var melee_dps_incVal = 0 + Number(document.getElementById('slot16_runs_melee_dps_inc').value) + Number(document.getElementById('slot16_1_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_2_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_3_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_4_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_5_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_6_gravs_melee_dps_inc').value) + Number(document.getElementById('slot16_7_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_runs_melee_dps_inc').value) + Number(document.getElementById('slot17_1_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_2_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_3_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_4_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_5_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_6_gravs_melee_dps_inc').value) + Number(document.getElementById('slot17_7_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_runs_melee_dps_inc').value) + Number(document.getElementById('slot18_1_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_2_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_3_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_4_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_5_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_6_gravs_melee_dps_inc').value) + Number(document.getElementById('slot18_7_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_runs_melee_dps_inc').value) + Number(document.getElementById('slot19_1_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_2_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_3_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_4_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_5_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_6_gravs_melee_dps_inc').value) + Number(document.getElementById('slot19_7_gravs_melee_dps_inc').value) + Number(document.getElementById('slot10_runs_melee_dps_inc').value) + Number(document.getElementById('slot11_runs_melee_dps_inc').value) + Number(document.getElementById('slot12_runs_melee_dps_inc').value) + Number(document.getElementById('slot13_runs_melee_dps_inc').value) + Number(document.getElementById('slot14_runs_melee_dps_inc').value) + Number(document.getElementById('slot15_runs_melee_dps_inc').value) + Number(document.getElementById('slot1_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot3_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot4_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot5_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot6_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot7_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot8_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot9_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot10_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot11_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot12_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot13_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot14_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot15_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot16_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot17_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot18_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot19_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot10_ua_time_melee_dps_inc').value) + Number(document.getElementById('sets_buff_ua_melee_dps_inc').value) + Number(document.getElementById('slot4_d_buff_melee_dps_inc').value) + Number(document.getElementById('slot8_d_buff_melee_dps_inc').value) + Number(document.getElementById('slot9_d_buff_melee_dps_inc').value) + Number(document.getElementById('slot16_d_buff_melee_dps_inc').value) + Number(document.getElementById('slot17_d_buff_melee_dps_inc').value) + Number(document.getElementById('folik_8').value) + Number(document.getElementById('skill_buff_1_1').value) + Number(document.getElementById('bash_a_1_1').value) + Number(document.getElementById('bash_a_1_2').value) + Number(document.getElementById('bash_a_1_3').value) + Number(document.getElementById('bash_a_1_4').value) + Number(document.getElementById('bash_a_1_5').value) + Number(document.getElementById('bash_a_1_6').value) + Number(document.getElementById('ods_1_1').value) + Number(document.getElementById('sintez_k_21').value);

    var ranged_dps_incVal = 0 + Number(document.getElementById('slot16_runs_ranged_dps_inc').value) + Number(document.getElementById('slot16_1_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_2_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_3_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_4_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_5_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_6_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot16_7_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_runs_ranged_dps_inc').value) + Number(document.getElementById('slot17_1_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_2_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_3_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_4_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_5_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_6_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot17_7_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_runs_ranged_dps_inc').value) + Number(document.getElementById('slot18_1_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_2_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_3_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_4_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_5_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_6_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot18_7_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_runs_ranged_dps_inc').value) + Number(document.getElementById('slot19_1_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_2_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_3_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_4_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_5_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_6_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot19_7_gravs_ranged_dps_inc').value) + Number(document.getElementById('slot10_runs_ranged_dps_inc').value) + Number(document.getElementById('slot11_runs_ranged_dps_inc').value) + Number(document.getElementById('slot12_runs_ranged_dps_inc').value) + Number(document.getElementById('slot13_runs_ranged_dps_inc').value) + Number(document.getElementById('slot14_runs_ranged_dps_inc').value) + Number(document.getElementById('slot15_runs_ranged_dps_inc').value) + Number(document.getElementById('slot1_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot3_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot4_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot5_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot6_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot7_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot8_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot9_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot10_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot11_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot12_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot13_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot14_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot15_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot16_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot17_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot18_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot19_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('slot10_ua_time_ranged_dps_inc').value) + summa(eiset_ranged_dps_inc) + Number(document.getElementById('sets_buff_ua_ranged_dps_inc').value) + Number(document.getElementById('folik_8').value) + Number(document.getElementById('skill_buff_6').value) + Number(document.getElementById('bash_a_1_1').value) + Number(document.getElementById('bash_a_1_2').value) + Number(document.getElementById('bash_a_1_3').value) + Number(document.getElementById('bash_a_1_4').value) + Number(document.getElementById('bash_a_1_5').value) + Number(document.getElementById('bash_a_1_6').value) + Number(document.getElementById('ods_1_1').value) + Number(document.getElementById('sintez_k_22').value);

    var spell_dps_incVal = 0 + Number(document.getElementById('slot16_runs_spell_dps_inc').value) + Number(document.getElementById('slot16_1_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_2_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_3_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_4_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_5_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_6_gravs_spell_dps_inc').value) + Number(document.getElementById('slot16_7_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_runs_spell_dps_inc').value) + Number(document.getElementById('slot17_1_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_2_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_3_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_4_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_5_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_6_gravs_spell_dps_inc').value) + Number(document.getElementById('slot17_7_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_runs_spell_dps_inc').value) + Number(document.getElementById('slot18_1_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_2_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_3_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_4_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_5_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_6_gravs_spell_dps_inc').value) + Number(document.getElementById('slot18_7_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_runs_spell_dps_inc').value) + Number(document.getElementById('slot19_1_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_2_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_3_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_4_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_5_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_6_gravs_spell_dps_inc').value) + Number(document.getElementById('slot19_7_gravs_spell_dps_inc').value) + Number(document.getElementById('slot10_runs_spell_dps_inc').value) + Number(document.getElementById('slot11_runs_spell_dps_inc').value) + Number(document.getElementById('slot12_runs_spell_dps_inc').value) + Number(document.getElementById('slot13_runs_spell_dps_inc').value) + Number(document.getElementById('slot14_runs_spell_dps_inc').value) + Number(document.getElementById('slot15_runs_spell_dps_inc').value) + Number(document.getElementById('slot1_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot3_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot4_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot5_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot6_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot7_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot8_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot9_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot10_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot11_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot12_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot13_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot14_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot15_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot16_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot17_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot18_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot19_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot10_ua_time_spell_dps_inc').value) + summa(eiset_ua_spell_dps) + Number(document.getElementById('sets_buff_ua_spell_dps_inc').value) + Number(document.getElementById('slot4_d_buff_spell_dps_inc').value) + Number(document.getElementById('slot8_d_buff_spell_dps_inc').value) + Number(document.getElementById('slot9_d_buff_spell_dps_inc').value) + Number(document.getElementById('slot16_d_buff_spell_dps_inc').value) + Number(document.getElementById('slot17_d_buff_spell_dps_inc').value) + Number(document.getElementById('folik_8').value) + Number(document.getElementById('skill_buff_1_1').value) + Number(document.getElementById('skill_buff_4_2').value) + Number(document.getElementById('skill_buff_22').value) + Number(document.getElementById('bash_a_1_1').value) + Number(document.getElementById('bash_a_1_2').value) + Number(document.getElementById('bash_a_1_3').value) + Number(document.getElementById('bash_a_1_4').value) + Number(document.getElementById('bash_a_1_5').value) + Number(document.getElementById('bash_a_1_6').value) + Number(document.getElementById('ods_1_1').value) + Number(document.getElementById('sintez_k_20').value);

    var heal_dps_incVal = 0 + Number(document.getElementById('slot16_runs_heal_dps_inc').value) + summa(eiset_heal_dps_inc) + Number(document.getElementById('slot16_1_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_2_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_3_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_4_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_5_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_6_gravs_heal_dps_inc').value) + Number(document.getElementById('slot16_7_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_runs_heal_dps_inc').value) + Number(document.getElementById('slot17_1_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_2_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_3_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_4_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_5_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_6_gravs_heal_dps_inc').value) + Number(document.getElementById('slot17_7_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_runs_heal_dps_inc').value) + Number(document.getElementById('slot18_1_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_2_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_3_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_4_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_5_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_6_gravs_heal_dps_inc').value) + Number(document.getElementById('slot18_7_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_runs_heal_dps_inc').value) + Number(document.getElementById('slot19_1_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_2_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_3_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_4_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_5_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_6_gravs_heal_dps_inc').value) + Number(document.getElementById('slot19_7_gravs_heal_dps_inc').value) + Number(document.getElementById('slot10_runs_heal_dps_inc').value) + Number(document.getElementById('slot11_runs_heal_dps_inc').value) + Number(document.getElementById('slot12_runs_heal_dps_inc').value) + Number(document.getElementById('slot13_runs_heal_dps_inc').value) + Number(document.getElementById('slot14_runs_heal_dps_inc').value) + Number(document.getElementById('slot15_runs_heal_dps_inc').value) + Number(document.getElementById('slot1_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot3_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot4_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot5_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot6_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot7_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot8_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot9_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot10_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot11_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot12_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot13_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot14_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot15_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot16_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot17_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot18_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot19_buff_ua_heal_dps_inc').value) + Number(document.getElementById('slot10_ua_time_heal_dps_inc').value) + Number(document.getElementById('sets_buff_ua_heal_dps_inc').value) + summa(eiset_ua_heal_mul1) + Number(document.getElementById('sintez_14').value) + Number(document.getElementById('skill_buff_22').value) + Number(document.getElementById('bash_a_1_1').value) + Number(document.getElementById('bash_a_1_2').value) + Number(document.getElementById('bash_a_1_3').value) + Number(document.getElementById('bash_a_1_4').value) + Number(document.getElementById('bash_a_1_5').value) + Number(document.getElementById('bash_a_1_6').value) + Number(document.getElementById('sintez_k_19').value);

    var melee_critical_bonusVal = 0 + Number(document.getElementById('slot6_runs_melee_critical_bonus').value) + Number(document.getElementById('slot16_runs_melee_critical_bonus').value) + Number(document.getElementById('slot16_1_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_2_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_3_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_4_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_5_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_6_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot16_7_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_runs_melee_critical_bonus').value) + Number(document.getElementById('slot17_1_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_2_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_3_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_4_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_5_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_6_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot17_7_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_runs_melee_critical_bonus').value) + Number(document.getElementById('slot18_1_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_2_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_3_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_4_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_5_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_6_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot18_7_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_runs_melee_critical_bonus').value) + Number(document.getElementById('slot19_1_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_2_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_3_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_4_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_5_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_6_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot19_7_gravs_melee_critical_bonus').value) + Number(document.getElementById('slot10_runs_melee_critical_bonus').value) + Number(document.getElementById('slot11_runs_melee_critical_bonus').value) + Number(document.getElementById('slot12_runs_melee_critical_bonus').value) + Number(document.getElementById('slot13_runs_melee_critical_bonus').value) + Number(document.getElementById('slot14_runs_melee_critical_bonus').value) + Number(document.getElementById('slot15_runs_melee_critical_bonus').value) + Number(document.getElementById('slot1_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot3_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot4_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot5_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot6_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot7_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot8_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot9_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot10_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot11_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot12_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot13_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot14_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot15_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot16_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot17_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot18_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot19_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('slot10_ua_time_melee_critical_bonus').value) + summa(eiset_melee_critical_bonus) + Number(document.getElementById('sets_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('grade_buff_ua_melee_critical_bonus').value) + Number(document.getElementById('sintez_6').value) + Number(document.getElementById('skill_buff_2_1').value) + Number(document.getElementById('sintez_k_27').value);

    var ranged_critical_bonusVal = 0 + Number(document.getElementById('ranged_crit_mul_pass').value) + Number(document.getElementById('slot6_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_1_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_2_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_3_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_4_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_5_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_6_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot16_7_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_1_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_2_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_3_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_4_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_5_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_6_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot17_7_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_1_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_2_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_3_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_4_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_5_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_6_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot18_7_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_1_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_2_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_3_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_4_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_5_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_6_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot19_7_gravs_ranged_critical_bonus').value) + Number(document.getElementById('slot10_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot11_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot12_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot13_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot14_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot15_runs_ranged_critical_bonus').value) + Number(document.getElementById('slot1_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot3_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot4_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot5_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot6_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot7_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot8_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot9_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot10_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot11_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot12_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot13_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot14_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot15_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot16_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot17_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot18_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot19_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('slot10_ua_time_ranged_critical_bonus').value) + summa(eiset_ranged_critical_bonus) + Number(document.getElementById('sets_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('grade_buff_ua_ranged_critical_bonus').value) + Number(document.getElementById('sintez_7').value) + Number(document.getElementById('sintez_k_28').value);

    var spell_critical_bonusVal = 0 + Number(document.getElementById('spell_crit_mul_pass').value) + Number(document.getElementById('slot6_runs_spell_critical_bonus').value) + Number(document.getElementById('slot16_runs_spell_critical_bonus').value) + Number(document.getElementById('slot16_1_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_2_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_3_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_4_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_5_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_6_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot16_7_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_runs_spell_critical_bonus').value) + Number(document.getElementById('slot17_1_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_2_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_3_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_4_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_5_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_6_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot17_7_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_runs_spell_critical_bonus').value) + Number(document.getElementById('slot18_1_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_2_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_3_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_4_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_5_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_6_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot18_7_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_runs_spell_critical_bonus').value) + Number(document.getElementById('slot19_1_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_2_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_3_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_4_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_5_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_6_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot19_7_gravs_spell_critical_bonus').value) + Number(document.getElementById('slot10_runs_spell_critical_bonus').value) + Number(document.getElementById('slot11_runs_spell_critical_bonus').value) + Number(document.getElementById('slot12_runs_spell_critical_bonus').value) + Number(document.getElementById('slot13_runs_spell_critical_bonus').value) + Number(document.getElementById('slot14_runs_spell_critical_bonus').value) + Number(document.getElementById('slot15_runs_spell_critical_bonus').value) + Number(document.getElementById('slot1_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot3_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot4_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot5_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot6_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot7_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot8_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot9_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot10_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot11_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot12_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot13_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot14_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot15_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot16_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot17_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot18_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot19_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('slot10_ua_time_spell_critical_bonus').value) + summa(eiset_spell_critical_bonus) + Number(document.getElementById('sets_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('grade_buff_ua_spell_critical_bonus').value) + Number(document.getElementById('sintez_5').value) + Number(document.getElementById('sintez_k_29').value);


    var heal_critical_bonusVal = 0 + Number(document.getElementById('hill_crit_mul_pass').value) + Number(document.getElementById('slot6_runs_heal_critical_bonus').value) + Number(document.getElementById('slot16_runs_heal_critical_bonus').value) + Number(document.getElementById('slot16_1_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_2_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_3_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_4_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_5_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_6_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot16_7_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_runs_heal_critical_bonus').value) + Number(document.getElementById('slot17_1_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_2_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_3_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_4_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_5_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_6_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot17_7_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_runs_heal_critical_bonus').value) + Number(document.getElementById('slot18_1_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_2_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_3_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_4_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_5_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_6_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot18_7_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_runs_heal_critical_bonus').value) + Number(document.getElementById('slot19_1_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_2_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_3_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_4_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_5_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_6_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot19_7_gravs_heal_critical_bonus').value) + Number(document.getElementById('slot10_runs_heal_critical_bonus').value) + Number(document.getElementById('slot11_runs_heal_critical_bonus').value) + Number(document.getElementById('slot12_runs_heal_critical_bonus').value) + Number(document.getElementById('slot13_runs_heal_critical_bonus').value) + Number(document.getElementById('slot14_runs_heal_critical_bonus').value) + Number(document.getElementById('slot15_runs_heal_critical_bonus').value) + Number(document.getElementById('slot1_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot3_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot4_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot5_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot6_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot7_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot8_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot9_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot10_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot11_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot12_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot13_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot14_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot15_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot16_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot17_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot18_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot19_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('slot10_ua_time_heal_critical_bonus').value) + Number(document.getElementById('sets_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('grade_buff_ua_heal_critical_bonus').value) + Number(document.getElementById('sintez_8').value) + Number(document.getElementById('sintez_k_30').value);

    var dodge_mulVal = 0 + Number(document.getElementById('dodge_pass').value) + Number(document.getElementById('slot1_runs_dodge_mul').value) + Number(document.getElementById('slot1_1_gravs_dodge_mul').value) + Number(document.getElementById('slot1_2_gravs_dodge_mul').value) + Number(document.getElementById('slot1_3_gravs_dodge_mul').value) + Number(document.getElementById('slot1_4_gravs_dodge_mul').value) + Number(document.getElementById('slot1_5_gravs_dodge_mul').value) + Number(document.getElementById('slot1_6_gravs_dodge_mul').value) + Number(document.getElementById('slot1_7_gravs_dodge_mul').value) + Number(document.getElementById('slot3_runs_dodge_mul').value) + Number(document.getElementById('slot3_1_gravs_dodge_mul').value) + Number(document.getElementById('slot3_2_gravs_dodge_mul').value) + Number(document.getElementById('slot3_3_gravs_dodge_mul').value) + Number(document.getElementById('slot3_4_gravs_dodge_mul').value) + Number(document.getElementById('slot3_5_gravs_dodge_mul').value) + Number(document.getElementById('slot3_6_gravs_dodge_mul').value) + Number(document.getElementById('slot3_7_gravs_dodge_mul').value) + Number(document.getElementById('slot4_runs_dodge_mul').value) + Number(document.getElementById('slot4_1_gravs_dodge_mul').value) + Number(document.getElementById('slot4_2_gravs_dodge_mul').value) + Number(document.getElementById('slot4_3_gravs_dodge_mul').value) + Number(document.getElementById('slot4_4_gravs_dodge_mul').value) + Number(document.getElementById('slot4_5_gravs_dodge_mul').value) + Number(document.getElementById('slot4_6_gravs_dodge_mul').value) + Number(document.getElementById('slot4_7_gravs_dodge_mul').value) + Number(document.getElementById('slot5_runs_dodge_mul').value) + Number(document.getElementById('slot5_1_gravs_dodge_mul').value) + Number(document.getElementById('slot5_2_gravs_dodge_mul').value) + Number(document.getElementById('slot5_3_gravs_dodge_mul').value) + Number(document.getElementById('slot5_4_gravs_dodge_mul').value) + Number(document.getElementById('slot5_5_gravs_dodge_mul').value) + Number(document.getElementById('slot5_6_gravs_dodge_mul').value) + Number(document.getElementById('slot5_7_gravs_dodge_mul').value) + Number(document.getElementById('slot6_runs_dodge_mul').value) + Number(document.getElementById('slot6_1_gravs_dodge_mul').value) + Number(document.getElementById('slot6_2_gravs_dodge_mul').value) + Number(document.getElementById('slot6_3_gravs_dodge_mul').value) + Number(document.getElementById('slot6_4_gravs_dodge_mul').value) + Number(document.getElementById('slot6_5_gravs_dodge_mul').value) + Number(document.getElementById('slot6_6_gravs_dodge_mul').value) + Number(document.getElementById('slot6_7_gravs_dodge_mul').value) + Number(document.getElementById('slot7_runs_dodge_mul').value) + Number(document.getElementById('slot7_1_gravs_dodge_mul').value) + Number(document.getElementById('slot7_2_gravs_dodge_mul').value) + Number(document.getElementById('slot7_3_gravs_dodge_mul').value) + Number(document.getElementById('slot7_4_gravs_dodge_mul').value) + Number(document.getElementById('slot7_5_gravs_dodge_mul').value) + Number(document.getElementById('slot7_6_gravs_dodge_mul').value) + Number(document.getElementById('slot7_7_gravs_dodge_mul').value) + Number(document.getElementById('slot8_runs_dodge_mul').value) + Number(document.getElementById('slot8_1_gravs_dodge_mul').value) + Number(document.getElementById('slot8_2_gravs_dodge_mul').value) + Number(document.getElementById('slot8_3_gravs_dodge_mul').value) + Number(document.getElementById('slot8_4_gravs_dodge_mul').value) + Number(document.getElementById('slot8_5_gravs_dodge_mul').value) + Number(document.getElementById('slot8_6_gravs_dodge_mul').value) + Number(document.getElementById('slot8_7_gravs_dodge_mul').value) + Number(document.getElementById('slot9_runs_dodge_mul').value) + Number(document.getElementById('slot9_1_gravs_dodge_mul').value) + Number(document.getElementById('slot9_2_gravs_dodge_mul').value) + Number(document.getElementById('slot9_3_gravs_dodge_mul').value) + Number(document.getElementById('slot9_4_gravs_dodge_mul').value) + Number(document.getElementById('slot9_5_gravs_dodge_mul').value) + Number(document.getElementById('slot9_6_gravs_dodge_mul').value) + Number(document.getElementById('slot9_7_gravs_dodge_mul').value) + Number(document.getElementById('slot16_runs_dodge_mul').value) + Number(document.getElementById('slot16_1_gravs_dodge_mul').value) + Number(document.getElementById('slot16_2_gravs_dodge_mul').value) + Number(document.getElementById('slot16_3_gravs_dodge_mul').value) + Number(document.getElementById('slot16_4_gravs_dodge_mul').value) + Number(document.getElementById('slot16_5_gravs_dodge_mul').value) + Number(document.getElementById('slot16_6_gravs_dodge_mul').value) + Number(document.getElementById('slot16_7_gravs_dodge_mul').value) + Number(document.getElementById('slot17_runs_dodge_mul').value) + Number(document.getElementById('slot17_1_gravs_dodge_mul').value) + Number(document.getElementById('slot17_2_gravs_dodge_mul').value) + Number(document.getElementById('slot17_3_gravs_dodge_mul').value) + Number(document.getElementById('slot17_4_gravs_dodge_mul').value) + Number(document.getElementById('slot17_5_gravs_dodge_mul').value) + Number(document.getElementById('slot17_6_gravs_dodge_mul').value) + Number(document.getElementById('slot17_7_gravs_dodge_mul').value) + Number(document.getElementById('slot18_runs_dodge_mul').value) + Number(document.getElementById('slot18_1_gravs_dodge_mul').value) + Number(document.getElementById('slot18_2_gravs_dodge_mul').value) + Number(document.getElementById('slot18_3_gravs_dodge_mul').value) + Number(document.getElementById('slot18_4_gravs_dodge_mul').value) + Number(document.getElementById('slot18_5_gravs_dodge_mul').value) + Number(document.getElementById('slot18_6_gravs_dodge_mul').value) + Number(document.getElementById('slot18_7_gravs_dodge_mul').value) + Number(document.getElementById('slot19_runs_dodge_mul').value) + Number(document.getElementById('slot19_1_gravs_dodge_mul').value) + Number(document.getElementById('slot19_2_gravs_dodge_mul').value) + Number(document.getElementById('slot19_3_gravs_dodge_mul').value) + Number(document.getElementById('slot19_4_gravs_dodge_mul').value) + Number(document.getElementById('slot19_5_gravs_dodge_mul').value) + Number(document.getElementById('slot19_6_gravs_dodge_mul').value) + Number(document.getElementById('slot19_7_gravs_dodge_mul').value) + Number(document.getElementById('slot10_runs_dodge_mul').value) + Number(document.getElementById('slot11_runs_dodge_mul').value) + Number(document.getElementById('slot12_runs_dodge_mul').value) + Number(document.getElementById('slot13_runs_dodge_mul').value) + Number(document.getElementById('slot14_runs_dodge_mul').value) + Number(document.getElementById('slot15_runs_dodge_mul').value) + Number(document.getElementById('slot1_buff_ua_dodge_mul').value) + Number(document.getElementById('slot3_buff_ua_dodge_mul').value) + Number(document.getElementById('slot4_buff_ua_dodge_mul').value) + Number(document.getElementById('slot5_buff_ua_dodge_mul').value) + Number(document.getElementById('slot6_buff_ua_dodge_mul').value) + Number(document.getElementById('slot7_buff_ua_dodge_mul').value) + Number(document.getElementById('slot8_buff_ua_dodge_mul').value) + Number(document.getElementById('slot9_buff_ua_dodge_mul').value) + Number(document.getElementById('slot10_buff_ua_dodge_mul').value) + Number(document.getElementById('slot11_buff_ua_dodge_mul').value) + Number(document.getElementById('slot12_buff_ua_dodge_mul').value) + Number(document.getElementById('slot13_buff_ua_dodge_mul').value) + Number(document.getElementById('slot14_buff_ua_dodge_mul').value) + Number(document.getElementById('slot15_buff_ua_dodge_mul').value) + Number(document.getElementById('slot16_buff_ua_dodge_mul').value) + Number(document.getElementById('slot17_buff_ua_dodge_mul').value) + Number(document.getElementById('slot18_buff_ua_dodge_mul').value) + Number(document.getElementById('slot19_buff_ua_dodge_mul').value) + Number(document.getElementById('slot10_ua_time_dodge_mul').value) + summa(eiset_ua_dodge_mul) + Number(document.getElementById('sets_buff_ua_dodge_mul').value) + Number(document.getElementById('ods_1_2').value) + Number(document.getElementById('sintez_k_24').value);

    var blockVal = 0 + Number(document.getElementById('slot1_runs_block').value) + Number(document.getElementById('slot1_1_gravs_block').value) + Number(document.getElementById('slot1_2_gravs_block').value) + Number(document.getElementById('slot1_3_gravs_block').value) + Number(document.getElementById('slot1_4_gravs_block').value) + Number(document.getElementById('slot1_5_gravs_block').value) + Number(document.getElementById('slot1_6_gravs_block').value) + Number(document.getElementById('slot1_7_gravs_block').value) + Number(document.getElementById('slot3_runs_block').value) + Number(document.getElementById('slot3_1_gravs_block').value) + Number(document.getElementById('slot3_2_gravs_block').value) + Number(document.getElementById('slot3_3_gravs_block').value) + Number(document.getElementById('slot3_4_gravs_block').value) + Number(document.getElementById('slot3_5_gravs_block').value) + Number(document.getElementById('slot3_6_gravs_block').value) + Number(document.getElementById('slot3_7_gravs_block').value) + Number(document.getElementById('slot4_runs_block').value) + Number(document.getElementById('slot4_1_gravs_block').value) + Number(document.getElementById('slot4_2_gravs_block').value) + Number(document.getElementById('slot4_3_gravs_block').value) + Number(document.getElementById('slot4_4_gravs_block').value) + Number(document.getElementById('slot4_5_gravs_block').value) + Number(document.getElementById('slot4_6_gravs_block').value) + Number(document.getElementById('slot4_7_gravs_block').value) + Number(document.getElementById('slot5_runs_block').value) + Number(document.getElementById('slot5_1_gravs_block').value) + Number(document.getElementById('slot5_2_gravs_block').value) + Number(document.getElementById('slot5_3_gravs_block').value) + Number(document.getElementById('slot5_4_gravs_block').value) + Number(document.getElementById('slot5_5_gravs_block').value) + Number(document.getElementById('slot5_6_gravs_block').value) + Number(document.getElementById('slot5_7_gravs_block').value) + Number(document.getElementById('slot6_runs_block').value) + Number(document.getElementById('slot6_1_gravs_block').value) + Number(document.getElementById('slot6_2_gravs_block').value) + Number(document.getElementById('slot6_3_gravs_block').value) + Number(document.getElementById('slot6_4_gravs_block').value) + Number(document.getElementById('slot6_5_gravs_block').value) + Number(document.getElementById('slot6_6_gravs_block').value) + Number(document.getElementById('slot6_7_gravs_block').value) + Number(document.getElementById('slot7_runs_block').value) + Number(document.getElementById('slot7_1_gravs_block').value) + Number(document.getElementById('slot7_2_gravs_block').value) + Number(document.getElementById('slot7_3_gravs_block').value) + Number(document.getElementById('slot7_4_gravs_block').value) + Number(document.getElementById('slot7_5_gravs_block').value) + Number(document.getElementById('slot7_6_gravs_block').value) + Number(document.getElementById('slot7_7_gravs_block').value) + Number(document.getElementById('slot8_runs_block').value) + Number(document.getElementById('slot8_1_gravs_block').value) + Number(document.getElementById('slot8_2_gravs_block').value) + Number(document.getElementById('slot8_3_gravs_block').value) + Number(document.getElementById('slot8_4_gravs_block').value) + Number(document.getElementById('slot8_5_gravs_block').value) + Number(document.getElementById('slot8_6_gravs_block').value) + Number(document.getElementById('slot8_7_gravs_block').value) + Number(document.getElementById('slot9_runs_block').value) + Number(document.getElementById('slot9_1_gravs_block').value) + Number(document.getElementById('slot9_2_gravs_block').value) + Number(document.getElementById('slot9_3_gravs_block').value) + Number(document.getElementById('slot9_4_gravs_block').value) + Number(document.getElementById('slot9_5_gravs_block').value) + Number(document.getElementById('slot9_6_gravs_block').value) + Number(document.getElementById('slot9_7_gravs_block').value) + Number(document.getElementById('slot16_runs_block').value) + Number(document.getElementById('slot16_1_gravs_block').value) + Number(document.getElementById('slot16_2_gravs_block').value) + Number(document.getElementById('slot16_3_gravs_block').value) + Number(document.getElementById('slot16_4_gravs_block').value) + Number(document.getElementById('slot16_5_gravs_block').value) + Number(document.getElementById('slot16_6_gravs_block').value) + Number(document.getElementById('slot16_7_gravs_block').value) + Number(document.getElementById('slot17_runs_block').value) + Number(document.getElementById('slot17_1_gravs_block').value) + Number(document.getElementById('slot17_2_gravs_block').value) + Number(document.getElementById('slot17_3_gravs_block').value) + Number(document.getElementById('slot17_4_gravs_block').value) + Number(document.getElementById('slot17_5_gravs_block').value) + Number(document.getElementById('slot17_6_gravs_block').value) + Number(document.getElementById('slot17_7_gravs_block').value) + Number(document.getElementById('slot18_runs_block').value) + Number(document.getElementById('slot18_1_gravs_block').value) + Number(document.getElementById('slot18_2_gravs_block').value) + Number(document.getElementById('slot18_3_gravs_block').value) + Number(document.getElementById('slot18_4_gravs_block').value) + Number(document.getElementById('slot18_5_gravs_block').value) + Number(document.getElementById('slot18_6_gravs_block').value) + Number(document.getElementById('slot18_7_gravs_block').value) + Number(document.getElementById('slot19_runs_block').value) + Number(document.getElementById('slot19_1_gravs_block').value) + Number(document.getElementById('slot19_2_gravs_block').value) + Number(document.getElementById('slot19_3_gravs_block').value) + Number(document.getElementById('slot19_4_gravs_block').value) + Number(document.getElementById('slot19_5_gravs_block').value) + Number(document.getElementById('slot19_6_gravs_block').value) + Number(document.getElementById('slot19_7_gravs_block').value) + Number(document.getElementById('slot10_runs_block').value) + Number(document.getElementById('slot11_runs_block').value) + Number(document.getElementById('slot12_runs_block').value) + Number(document.getElementById('slot13_runs_block').value) + Number(document.getElementById('slot14_runs_block').value) + Number(document.getElementById('slot15_runs_block').value) + Number(document.getElementById('slot1_buff_ua_block_mul').value) + Number(document.getElementById('slot3_buff_ua_block_mul').value) + Number(document.getElementById('slot4_buff_ua_block_mul').value) + Number(document.getElementById('slot5_buff_ua_block_mul').value) + Number(document.getElementById('slot6_buff_ua_block_mul').value) + Number(document.getElementById('slot7_buff_ua_block_mul').value) + Number(document.getElementById('slot8_buff_ua_block_mul').value) + Number(document.getElementById('slot9_buff_ua_block_mul').value) + Number(document.getElementById('slot10_buff_ua_block_mul').value) + Number(document.getElementById('slot11_buff_ua_block_mul').value) + Number(document.getElementById('slot12_buff_ua_block_mul').value) + Number(document.getElementById('slot13_buff_ua_block_mul').value) + Number(document.getElementById('slot14_buff_ua_block_mul').value) + Number(document.getElementById('slot15_buff_ua_block_mul').value) + Number(document.getElementById('slot16_buff_ua_block_mul').value) + Number(document.getElementById('slot17_buff_ua_block_mul').value) + Number(document.getElementById('slot18_buff_ua_block_mul').value) + Number(document.getElementById('slot19_buff_ua_block_mul').value) + Number(document.getElementById('slot10_ua_time_block_mul').value) + Number(document.getElementById('sets_buff_ua_block_mul').value) + Number(document.getElementById('grade_buff_ua_block_mul').value) + summa(eiset_ua_block_mul) + Number(document.getElementById('skill_buff_13_1').value) + Number(document.getElementById('sintez_k_25').value);

    var melee_parry_mulVal = 0 + Number(document.getElementById('melee_parry_pass').value) + Number(document.getElementById('slot1_runs_melee_parry_mul').value) + Number(document.getElementById('slot1_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot1_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_runs_melee_parry_mul').value) + Number(document.getElementById('slot3_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot3_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_runs_melee_parry_mul').value) + Number(document.getElementById('slot4_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot4_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_runs_melee_parry_mul').value) + Number(document.getElementById('slot5_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot5_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_runs_melee_parry_mul').value) + Number(document.getElementById('slot6_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot6_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_runs_melee_parry_mul').value) + Number(document.getElementById('slot7_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot7_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_runs_melee_parry_mul').value) + Number(document.getElementById('slot8_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot8_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_runs_melee_parry_mul').value) + Number(document.getElementById('slot9_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot9_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_runs_melee_parry_mul').value) + Number(document.getElementById('slot16_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot16_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_runs_melee_parry_mul').value) + Number(document.getElementById('slot17_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot17_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_runs_melee_parry_mul').value) + Number(document.getElementById('slot18_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot18_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_runs_melee_parry_mul').value) + Number(document.getElementById('slot19_1_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_2_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_3_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_4_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_5_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_6_gravs_melee_parry_mul').value) + Number(document.getElementById('slot19_7_gravs_melee_parry_mul').value) + Number(document.getElementById('slot10_runs_melee_parry_mul').value) + Number(document.getElementById('slot11_runs_melee_parry_mul').value) + Number(document.getElementById('slot12_runs_melee_parry_mul').value) + Number(document.getElementById('slot13_runs_melee_parry_mul').value) + Number(document.getElementById('slot14_runs_melee_parry_mul').value) + Number(document.getElementById('slot15_runs_melee_parry_mul').value) + Number(document.getElementById('slot1_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot3_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot4_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot5_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot6_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot7_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot8_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot9_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot10_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot11_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot12_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot13_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot14_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot15_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot16_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot17_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot18_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot19_buff_ua_melee_parry_mul').value) + Number(document.getElementById('slot10_ua_time_melee_parry_mul').value) + summa(eiset_melee_parry_mul) + Number(document.getElementById('sets_buff_ua_melee_parry_mul').value) + Number(document.getElementById('grade_buff_ua_melee_parry_mul').value) + Number(document.getElementById('skill_buff_2_2').value) + Number(document.getElementById('sintez_k_26').value);


    var move_speed_mulVal = 0 + Number(document.getElementById('move_speed_pass').value) + Number(document.getElementById('slot7_runs_move_speed_mul').value) + Number(document.getElementById('slot7_1_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_2_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_3_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_4_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_5_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_6_gravs_move_speed_mul').value) + Number(document.getElementById('slot7_7_gravs_move_speed_mul').value) + Number(document.getElementById('slot1_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot3_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot4_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot5_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot6_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot7_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot8_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot9_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot10_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot11_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot12_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot13_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot14_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot15_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot16_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot17_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot18_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot19_buff_ua_move_speed_mul').value) + Number(document.getElementById('slot10_ua_time_move_speed_mul').value) + summa(eiset_move_speed_mul) + Number(document.getElementById('sets_buff_ua_move_speed_mul').value) + Number(document.getElementById('title_buff_ua_move_speed_mul').value) + Number(document.getElementById('pis_1').value) + Number(document.getElementById('svit_3').value) + Number(document.getElementById('skill_buff_9_1').value) + Number(document.getElementById('skill_buff_11_2').value) - Number(document.getElementById('skill_buff_13_2').value) + Number(document.getElementById('skill_buff_17').value) + Number(document.getElementById('skill_buff_1_2').value) + Number(document.getElementById('pets_4').value) + Number(document.getElementById('sintez_k_18').value);

    var casting_time_mulVal = 0 + Number(document.getElementById('casting_time_pass').value) + Number(document.getElementById('casting_time2_pass').value) + Number(document.getElementById('casting_time3_pass').value) + Number(document.getElementById('casting_time4_pass').value) + Number(document.getElementById('slot1_runs_casting_time_mul').value) + Number(document.getElementById('slot1_1_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_2_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_3_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_4_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_5_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_6_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_runs_casting_time_mul').value) + Number(document.getElementById('slot18_1_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_2_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_3_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_4_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_5_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_6_gravs_casting_time_mul').value) + Number(document.getElementById('slot18_7_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_runs_casting_time_mul').value) + Number(document.getElementById('slot19_1_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_2_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_3_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_4_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_5_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_6_gravs_casting_time_mul').value) + Number(document.getElementById('slot19_7_gravs_casting_time_mul').value) + Number(document.getElementById('slot1_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot3_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot4_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot5_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot6_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot7_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot8_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot9_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot10_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot11_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot12_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot13_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot14_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot15_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot16_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot17_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot18_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot19_buff_ua_casting_time_mul').value) + Number(document.getElementById('slot10_ua_time_casting_time_mul').value) + Number(summa(eiset_casting_time_mul)) + Number(document.getElementById('sets_buff_ua_casting_time_mul').value) + Number(document.getElementById('skill_buff_18').value) + Number(document.getElementById('ods_2_2').value) + Number(document.getElementById('sintez_k_11').value);

    var provor = 0;

    if (Number(document.getElementById('skill_buff_11_1').value) == 160) {
        provor = 5.3;
    }
    if (Number(document.getElementById('skill_buff_11_1').value) == 180) {
        provor = 6;
    }
    if (Number(document.getElementById('skill_buff_11_1').value) > 180) {
        provor = 7.1;
    }
    var melee_speed_mulVal_arr = [Number(document.getElementById('slot1_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot3_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot4_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot5_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot6_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot7_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot8_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot9_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot10_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot11_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot12_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot13_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot14_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot15_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot16_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot17_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot18_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot19_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot10_ua_time_melee_speed_mul').value), Number(document.getElementById('slot1_runs_melee_speed_mul1').value), Number(document.getElementById('slot18_runs_melee_speed_mul1').value), Number(document.getElementById('slot1_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_7_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_7_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_runs_melee_speed_mul1').value), Number(document.getElementById('slot19_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_7_gravs_melee_speed_mul1').value), summa(eiset_melee_speed_mul), Number(document.getElementById('sets_buff_ua_melee_speed_mul').value), Number(document.getElementById('weapons_buff_ua_melee_speed_mul').value), Number(document.getElementById('grade_buff_ua_melee_speed_mul').value), Number(document.getElementById('pis_4').value), Number(document.getElementById('skill_buff_9_2').value), Number(document.getElementById('skill_buff_14').value), Number(document.getElementById('skill_buff_20_2').value), Number(document.getElementById('ods_2_2').value), provor];

    var melee_speed_k = 100;
    for (var i = 0, melee_speed_mulVal_arrlength = melee_speed_mulVal_arr.length; i < melee_speed_mulVal_arrlength; i++) {
        if (melee_speed_mulVal_arr[i] > 0) {
            melee_speed_k -= (melee_speed_k * melee_speed_mulVal_arr[i]) / 100;
        }
    }
    var melee_speed_mulVal = 0 + summa(melee_speed_mulVal_arr);

    var dop_damage_meleeVal_1 = Number(document.getElementById('melee_attack_pass').value) + summa(eiset_melee_dps_inc) + Number(document.getElementById('fial_4').value) + Number(document.getElementById('folik_1').value) + Number(document.getElementById('folik_2').value) + Number(document.getElementById('folik_3').value) + Number(document.getElementById('folik_4').value) + Number(document.getElementById('folik_5').value) + Number(document.getElementById('folik_6').value) + Number(document.getElementById('folik_7').value);

    var dop_damage_meleeVal = 0 + Number(document.getElementById('slot16_runs_dop_damage_melee').value) + Number(document.getElementById('slot17_runs_dop_damage_melee').value) + Number(document.getElementById('slot18_runs_dop_damage_melee').value) + Number(document.getElementById('slot19_runs_dop_damage_melee').value) + Number(document.getElementById('slot1_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot3_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot4_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot5_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot6_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot7_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot8_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot9_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot10_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot11_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot12_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot13_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot14_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot15_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot16_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot17_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot18_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot19_buff_ua_melee_damage_mul').value) + Number(document.getElementById('slot10_ua_time_melee_damage_mul').value) + Number(document.getElementById('weapons_buff_ua_melee_damage_mul').value) + summa(eiset_melee_damage_mul) + Number(document.getElementById('pis_3').value) + Number(document.getElementById('skill_buff_20_1').value) + Number(document.getElementById('sintez_k_32').value);

    var dop_damage_rangedVal_1 = summa(eiset_ranged_dps_inc) + Number(document.getElementById('fial_4').value) + Number(document.getElementById('folik_1').value) + Number(document.getElementById('folik_2').value) + Number(document.getElementById('folik_3').value) + Number(document.getElementById('folik_4').value) + Number(document.getElementById('folik_5').value) + Number(document.getElementById('folik_6').value) + Number(document.getElementById('folik_7').value);

    var dop_damage_rangedVal = 0 + Number(document.getElementById('slot16_runs_dop_damage_ranged').value) + Number(document.getElementById('slot17_runs_dop_damage_ranged').value) + Number(document.getElementById('slot18_runs_dop_damage_ranged').value) + Number(document.getElementById('slot19_runs_dop_damage_ranged').value) + Number(document.getElementById('slot1_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot3_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot4_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot5_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot6_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot7_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot8_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot9_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot10_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot11_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot12_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot13_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot14_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot15_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot16_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot17_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot18_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot19_buff_ua_ranged_damage_mul').value) + Number(document.getElementById('slot10_ua_time_ranged_damage_mul').value) + Number(document.getElementById('weapons_buff_ua_ranged_damage_mul').value) + summa(eiset_ranged_damage_mul) + Number(document.getElementById('pis_3').value) + Number(document.getElementById('skill_buff_5').value) + Number(document.getElementById('skill_buff_20_1').value) + Number(document.getElementById('sintez_k_33').value);

    var dop_damage_spellVal_1 = summa(eiset_spell_dps_inc) + Number(document.getElementById('fial_5').value) + Number(document.getElementById('folik_1').value) + Number(document.getElementById('folik_2').value) + Number(document.getElementById('folik_3').value) + Number(document.getElementById('folik_4').value) + Number(document.getElementById('folik_5').value) + Number(document.getElementById('folik_6').value) + Number(document.getElementById('folik_7').value);

    var dop_damage_spellVal = 0 + Number(document.getElementById('slot16_runs_dop_damage_spell').value) + Number(document.getElementById('slot17_runs_dop_damage_spell').value) + Number(document.getElementById('slot18_runs_dop_damage_spell').value) + Number(document.getElementById('slot19_runs_dop_damage_spell').value) + Number(document.getElementById('slot1_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot3_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot4_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot5_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot6_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot7_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot8_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot9_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot10_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot11_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot12_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot13_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot14_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot15_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot16_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot17_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot18_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot19_buff_ua_spell_damage_mul').value) + Number(document.getElementById('slot10_ua_time_spell_damage_mul').value) + Number(document.getElementById('sets_buff_ua_spell_damage_mul').value) + Number(document.getElementById('weapons_buff_ua_spell_damage_mul').value) + summa(eiset_spell_damage_mul) + Number(document.getElementById('pis_3').value) + Number(document.getElementById('skill_buff_20_1').value) + Number(document.getElementById('sintez_k_31').value);

    var dop_damage_healVal_1 = summa(eiset_ua_heal_mul) + Number(document.getElementById('fial_5').value);

    var dop_damage_healVal = 0 + Number(document.getElementById('slot1_runs_heal_mul').value) + Number(document.getElementById('slot3_runs_heal_mul').value) + Number(document.getElementById('slot4_runs_heal_mul').value) + Number(document.getElementById('slot5_runs_heal_mul').value) + Number(document.getElementById('slot6_runs_heal_mul').value) + Number(document.getElementById('slot7_runs_heal_mul').value) + Number(document.getElementById('slot8_runs_heal_mul').value) + Number(document.getElementById('slot9_runs_heal_mul').value) + Number(document.getElementById('slot10_runs_heal_mul').value) + Number(document.getElementById('slot11_runs_heal_mul').value) + Number(document.getElementById('slot12_runs_heal_mul').value) + Number(document.getElementById('slot13_runs_heal_mul').value) + Number(document.getElementById('slot14_runs_heal_mul').value) + Number(document.getElementById('slot15_runs_heal_mul').value) + Number(document.getElementById('slot16_runs_heal_mul').value) + Number(document.getElementById('slot17_runs_heal_mul').value) + Number(document.getElementById('slot18_runs_heal_mul').value) + Number(document.getElementById('slot19_runs_heal_mul').value) + Number(document.getElementById('slot1_buff_ua_heal_mul').value) + Number(document.getElementById('slot3_buff_ua_heal_mul').value) + Number(document.getElementById('slot4_buff_ua_heal_mul').value) + Number(document.getElementById('slot5_buff_ua_heal_mul').value) + Number(document.getElementById('slot6_buff_ua_heal_mul').value) + Number(document.getElementById('slot7_buff_ua_heal_mul').value) + Number(document.getElementById('slot8_buff_ua_heal_mul').value) + Number(document.getElementById('slot9_buff_ua_heal_mul').value) + Number(document.getElementById('slot10_buff_ua_heal_mul').value) + Number(document.getElementById('slot11_buff_ua_heal_mul').value) + Number(document.getElementById('slot12_buff_ua_heal_mul').value) + Number(document.getElementById('slot13_buff_ua_heal_mul').value) + Number(document.getElementById('slot14_buff_ua_heal_mul').value) + Number(document.getElementById('slot15_buff_ua_heal_mul').value) + Number(document.getElementById('slot16_buff_ua_heal_mul').value) + Number(document.getElementById('slot17_buff_ua_heal_mul').value) + Number(document.getElementById('slot18_buff_ua_heal_mul').value) + Number(document.getElementById('slot19_buff_ua_heal_mul').value) + Number(document.getElementById('slot10_ua_time_heal_mul').value) + Number(document.getElementById('weapons_buff_ua_heal_mul').value) + Number(document.getElementById('pis_3').value) + Number(document.getElementById('sintez_k_34').value);

    var melee_critical_mulVal = 0 + Number(document.getElementById('slot6_runs_melee_critical_mul').value) + Number(document.getElementById('melee_crit_pass').value) + Number(document.getElementById('melee_crit2_pass').value) + Number(document.getElementById('slot1_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot3_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot4_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot5_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot6_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot7_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot8_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot9_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot10_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot11_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot12_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot13_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot14_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot15_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot16_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot17_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot18_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot19_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot10_ua_time_melee_critical_mul').value) + summa(eiset_melee_critical_mul) + Number(document.getElementById('sets_buff_ua_melee_critical_mul').value) + Number(document.getElementById('grade_buff_ua_melee_critical_mul').value) + Number(document.getElementById('slot4_d_buff_melee_critical_mul').value) + Number(document.getElementById('slot8_d_buff_melee_critical_mul').value) + Number(document.getElementById('slot9_d_buff_melee_critical_mul').value) + Number(document.getElementById('slot16_d_buff_melee_critical_mul').value) + Number(document.getElementById('slot17_d_buff_melee_critical_mul').value) + Number(document.getElementById('sintez_k_39').value);

    var ranged_critical_mulVal = 0 + Number(document.getElementById('slot6_runs_ranged_critical_mul').value) + Number(document.getElementById('ranged_crit_pass').value) + Number(document.getElementById('ranged_crit2_pass').value) + Number(document.getElementById('slot1_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot3_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot4_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot5_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot6_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot7_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot8_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot9_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot10_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot11_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot12_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot13_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot14_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot15_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot16_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot17_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot18_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot19_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('slot10_ua_time_ranged_critical_mul').value) + summa(eiset_ranged_critical_mul) + Number(document.getElementById('sets_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('grade_buff_ua_ranged_critical_mul').value) + Number(document.getElementById('skill_buff_7').value) + Number(document.getElementById('sintez_k_37').value);

    var spell_critical_mulVal = 0 + Number(document.getElementById('slot6_runs_spell_critical_mul').value) + Number(document.getElementById('spell_crit_pass').value) + Number(document.getElementById('slot1_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot3_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot4_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot5_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot6_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot7_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot8_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot9_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot10_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot11_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot12_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot13_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot14_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot15_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot16_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot17_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot18_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot19_buff_ua_spell_critical_mul').value) + Number(document.getElementById('slot10_ua_time_spell_critical_mul').value) + summa(eiset_spell_critical_mul) + Number(document.getElementById('sets_buff_ua_spell_critical_mul').value) + Number(document.getElementById('grade_buff_ua_spell_critical_mul').value) + Number(document.getElementById('spell_critical_pass').value) + Number(document.getElementById('skill_buff_4_1').value) + Number(document.getElementById('sintez_k_38').value);

    var heal_critical_mulVal = 0 + Number(document.getElementById('slot6_runs_heal_critical_mul').value) + Number(document.getElementById('slot1_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot3_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot4_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot5_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot6_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot7_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot8_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot9_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot10_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot11_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot12_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot13_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot14_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot15_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot16_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot17_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot18_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot19_buff_ua_heal_critical_mul').value) + Number(document.getElementById('slot10_ua_time_heal_critical_mul').value) + Number(document.getElementById('sets_buff_ua_heal_critical_mul').value) + Number(document.getElementById('grade_buff_ua_heal_critical_mul').value) + Number(document.getElementById('sintez_k_36').value);

    var incoming_damage_mulVal = 0 + Number(document.getElementById('slot1_buff_ua_incoming_damage').value) + Number(document.getElementById('slot3_buff_ua_incoming_damage').value) + Number(document.getElementById('slot4_buff_ua_incoming_damage').value) + Number(document.getElementById('slot5_buff_ua_incoming_damage').value) + Number(document.getElementById('slot6_buff_ua_incoming_damage').value) + Number(document.getElementById('slot7_buff_ua_incoming_damage').value) + Number(document.getElementById('slot8_buff_ua_incoming_damage').value) + Number(document.getElementById('slot9_buff_ua_incoming_damage').value) + Number(document.getElementById('slot10_buff_ua_incoming_damage').value) + Number(document.getElementById('slot11_buff_ua_incoming_damage').value) + Number(document.getElementById('slot12_buff_ua_incoming_damage').value) + Number(document.getElementById('slot13_buff_ua_incoming_damage').value) + Number(document.getElementById('slot14_buff_ua_incoming_damage').value) + Number(document.getElementById('slot15_buff_ua_incoming_damage').value) + Number(document.getElementById('slot16_buff_ua_incoming_damage').value) + Number(document.getElementById('slot17_buff_ua_incoming_damage').value) + Number(document.getElementById('slot18_buff_ua_incoming_damage').value) + Number(document.getElementById('slot19_buff_ua_incoming_damage').value) + Number(document.getElementById('slot10_ua_time_incoming_damage').value) + summa(eiset_incoming_damage_mul) + Number(document.getElementById('slot3_runs_incoming_damage_mul').value) + Number(document.getElementById('slot4_d_buff_incoming_damage_mul').value) + Number(document.getElementById('slot8_d_buff_incoming_damage_mul').value) + Number(document.getElementById('slot9_d_buff_incoming_damage_mul').value) + Number(document.getElementById('slot16_d_buff_incoming_damage_mul').value) + Number(document.getElementById('slot17_d_buff_incoming_damage_mul').value) + Number(document.getElementById('pis_5').value) + Number(document.getElementById('ods_2_1').value) + Number(document.getElementById('sintez_k_35').value);

    var x_health_regenVal = Number(document.getElementById('health_regen_pass').value) + Number(document.getElementById('slot1_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot3_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot4_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot5_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot6_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot7_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot8_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot9_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot10_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot11_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot12_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot13_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot14_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot15_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot16_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot17_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot18_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot19_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot10_ua_time_persistent_health_regen').value) + summa(eiset_persistent_health_regen) + Number(document.getElementById('title_buff_ua_persistent_health_regen').value) + Number(document.getElementById('slot9_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot12_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot13_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot14_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot15_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot16_d_buff_persistent_health_regen').value) + Number(document.getElementById('slot17_d_buff_persistent_health_regen').value) + Number(Number(document.getElementById('pets_5').value) / 300);


    var ua_persistent_health_regenVal = 0 + Number(document.getElementById('health_regen2_pass').value) + x_health_regenVal;

    var ua_persistent_health_regenVal_f = 0 + Number(document.getElementById('slot3_runs_persistent_health_regen').value) + Number(document.getElementById('sintez_17').value) + x_health_regenVal;

    var x_mana_regenVal = 0 + Number(document.getElementById('mana_regen_pass').value) + Number(document.getElementById('slot1_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot3_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot4_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot5_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot6_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot7_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot8_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot9_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot10_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot12_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot13_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot14_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot15_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot16_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot17_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot18_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot19_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot10_ua_time_persistent_mana_regen').value) + summa(eiset_persistent_mana_regen) + Number(document.getElementById('title_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('slot9_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot12_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot13_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot14_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot15_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot16_d_buff_persistent_mana_regen').value) + Number(document.getElementById('slot17_d_buff_persistent_mana_regen').value) + Number(Number(document.getElementById('pets_5').value) / 300);


    var ua_persistent_mana_regenVal = 0 + x_mana_regenVal + Number(document.getElementById('mana_regen2_pass').value);
    var ua_persistent_mana_regenVal_f = 0 + Number(document.getElementById('slot3_runs_persistent_mana_regen').value) + Number(document.getElementById('slot11_buff_ua_persistent_mana_regen').value) + Number(document.getElementById('sintez_18').value) + x_mana_regenVal;

    var incoming_damage_pve = Number(document.getElementById('nap_5').value) / 325 + Number(document.getElementById('sintez_k_6').value);
    var dop_damage_mobs_melee = Math.floor(Number(document.getElementById('nap_11').value) / 216) + Number(document.getElementById('sintez_k_3').value);
    var dop_damage_mobs_ranged = Math.floor(Number(document.getElementById('nap_11').value) / 216) + Number(document.getElementById('sintez_k_4').value);
    var dop_damage_mobs_spell = Math.floor(Number(document.getElementById('nap_11').value) / 216) + Number(document.getElementById('sintez_k_5').value);

    if (ua_persistent_health_regenVal + spi_color != 0) {
        document.getElementById('ua_persistent_health_regenVal').innerHTML = Math.floor(50 + 0.2 * Number(spi)) + ua_persistent_health_regenVal;
        $('#ua_persistent_health_regenVal').css('color', '#00a000');
    }
    if (ua_persistent_health_regenVal + spi_color == 0) {
        document.getElementById('ua_persistent_health_regenVal').innerHTML = Math.floor(50 + 0.2 * Number(spi));
        $('#ua_persistent_health_regenVal').css('color', '#764b07');
    }

    if (ua_persistent_mana_regenVal + spi_color != 0) {
        document.getElementById('ua_persistent_mana_regenVal').innerHTML = Math.floor(15 + 0.2 * Number(spi)) + ua_persistent_mana_regenVal;
        $('#ua_persistent_mana_regenVal').css('color', '#00a000');
    }
    if (ua_persistent_mana_regenVal + spi_color == 0) {
        document.getElementById('ua_persistent_mana_regenVal').innerHTML = Math.floor(15 + 0.2 * Number(spi));
        $('#ua_persistent_mana_regenVal').css('color', '#764b07');
    }


    if (ua_persistent_mana_regenVal_f != 0) {
        document.getElementById('mana_regen_f').innerHTML = 0 + ua_persistent_mana_regenVal_f;
        $('#mana_regen_f').css('color', '#00a000');
    }
    if (ua_persistent_mana_regenVal_f == 0) {
        document.getElementById('mana_regen_f').innerHTML = 0;
        $('#mana_regen_f').css('color', '#764b07');
    }
    if (ua_persistent_health_regenVal_f != 0) {
        document.getElementById('health_regen_f').innerHTML = 0 + ua_persistent_health_regenVal_f;
        $('#health_regen_f').css('color', '#00a000');
    }
    if (ua_persistent_health_regenVal_f == 0) {
        document.getElementById('health_regen_f').innerHTML = 0;
        $('#health_regen_f').css('color', '#764b07');
    }

    if (incoming_damage_pve > 0) {
        document.getElementById('incoming_damage_pve').innerHTML = incoming_damage_pve.toFixed(1) + " %";
        $('#incoming_damage_pve').css('color', '#00a000');
    }
    else {
        document.getElementById('incoming_damage_pve').innerHTML = "0.0 %";
        $('#incoming_damage_pve').css('color', '#764b07');
    }

    if (dop_damage_mobs_melee > 0) {
        document.getElementById('dop_damage_mobs_melee').innerHTML = dop_damage_mobs_melee.toFixed(1) + " %";
        $('#dop_damage_mobs_melee').css('color', '#00a000');
    }
    else {
        document.getElementById('dop_damage_mobs_melee').innerHTML = "0.0 %";
        $('#dop_damage_mobs_melee').css('color', '#764b07');
    }

    if (dop_damage_mobs_ranged > 0) {
        document.getElementById('dop_damage_mobs_ranged').innerHTML = dop_damage_mobs_ranged.toFixed(1) + " %";
        $('#dop_damage_mobs_ranged').css('color', '#00a000');
    }
    else {
        document.getElementById('dop_damage_mobs_ranged').innerHTML = "0.0 %";
        $('#dop_damage_mobs_ranged').css('color', '#764b07');
    }

    if (dop_damage_mobs_spell > 0) {
        document.getElementById('dop_damage_mobs_spell').innerHTML = dop_damage_mobs_spell.toFixed(1) + " %";
        $('#dop_damage_mobs_spell').css('color', '#00a000');
    }
    else {
        document.getElementById('dop_damage_mobs_spell').innerHTML = "0.0 %";
        $('#dop_damage_mobs_spell').css('color', '#764b07');
    }


    if (casting_time_mulVal > 60) {
        casting_time_mulVal = 60;
    }

    if (casting_time_mulVal > 0) {
        document.getElementById('casting_time_mulVal').innerHTML = (100 - casting_time_mulVal).toFixed(1) + " %";
        $('#casting_time_mulVal').css('color', '#00a000');
    }
    if (casting_time_mulVal == 0) {
        document.getElementById('casting_time_mulVal').innerHTML = "100.0 %";
        $('#casting_time_mulVal').css('color', '#764b07');
    }

    if (melee_speed_mulVal > 0) {
        document.getElementById('melee_speed_mulVal').innerHTML = (Math.round(melee_speed_k)).toFixed(1) + " %";
        $('#melee_speed_mulVal').css('color', '#00a000');
    }
    if (melee_speed_mulVal == 0) {
        document.getElementById('melee_speed_mulVal').innerHTML = "100.0 %";
        $('#melee_speed_mulVal').css('color', '#764b07');
    }

    if (move_speed_mulVal > 0) {
        document.getElementById('move_speed_mulVal').innerHTML = (5.4 + 5.4 * move_speed_mulVal / 100).toFixed(1) + " м/с";
        $('#move_speed_mulVal').css('color', '#00a000');
    }
    if (move_speed_mulVal < 0) {
        document.getElementById('move_speed_mulVal').innerHTML = (5.4 + 5.4 * move_speed_mulVal / 100).toFixed(1) + " м/с";
        $('#move_speed_mulVal').css('color', '#D63737');
    }
    if (move_speed_mulVal == 0) {
        document.getElementById('move_speed_mulVal').innerHTML = (5.4).toFixed(1) + " м/с";
        $('#move_speed_mulVal').css('color', '#764b07');
    }

    var strText = (Number(document.getElementById('slot16_mldps').value)
        + Number(document.getElementById('slot17_mldps').value)
        + Number(str) * 0.2 + melee_dps_incVal)
        + (
            Number(document.getElementById('slot16_mldps').value)
        + Number(document.getElementById('slot17_mldps').value)
        + str * 0.2
        + melee_dps_incVal
        ) * dop_damage_meleeVal_1 / 100;
    var dexText = (Number(document.getElementById('slot18_rngdps').value) + Number(dex) * 0.2 + ranged_dps_incVal) + (Number(document.getElementById('slot18_rngdps').value) + dex * 0.2 + ranged_dps_incVal) * dop_damage_rangedVal_1 / 100;
    var intlText = (Number(document.getElementById('slot16_spldps').value) + Number(document.getElementById('slot17_spldps').value) + Number(intl) * 0.2 + spell_dps_incVal) + (Number(document.getElementById('slot16_spldps').value) + Number(intl) * 0.2 + spell_dps_incVal) * dop_damage_spellVal_1 / 100;
    var hilText = (Number(document.getElementById('slot16_hildps').value) + Number(spi) * 0.2 + heal_dps_incVal + Number(document.getElementById('slot17_hildps').value)) + (Number(document.getElementById('slot16_hildps').value) + Number(spi) * 0.2 + heal_dps_incVal + Number(document.getElementById('slot17_hildps').value)) * dop_damage_healVal_1 / 100;
    var set_atckspdText = 1.5;
    var set_atckspdText2 = 3;
    var atckspdText;
    var atckspdText2;
    if (Number(document.getElementById('slot16_id').value) > 0) {
        set_atckspdText = Number(document.getElementById('slot16_atckspd').value);
    }
    if (Number(document.getElementById('slot17_atckspd').value) > 0) {
        set_atckspdText2 = Number(document.getElementById('slot17_atckspd').value);
    }
    var speed_att_k;
    if (Number(document.getElementById('slot16_category_id').value) > 126) {
        speed_att_k = melee_speed_k + 7.6;
    } else {
        speed_att_k = melee_speed_k;
    }
    if (speed_att_k < 100) {
        atckspdText = set_atckspdText * speed_att_k / 100;
        atckspdText2 = set_atckspdText2 * speed_att_k / 100;
        if (Number(document.getElementById('slot17_atckspd').value) > 0 && Number(document.getElementById('slot16_id').value) > 0 && Number(document.getElementById('slot16_category_id').value) < 126) {
            atckspdText2 = atckspdText2.toFixed(1) * 2;
        }
    }
    else {
        atckspdText = set_atckspdText;
        atckspdText2 = set_atckspdText2;
    }


    var incoming_damage_spell = 0 + incoming_damage_mulVal + Number(document.getElementById('grade_buff_ua_incoming_damage').value) + Number(document.getElementById('slot9_buff_ua_incoming_melee_damage_mul').value) + Number(document.getElementById('slot10_ua_time_incoming_spell_damage_mul').value) + Number(document.getElementById('bash_a_2_1').value) + Number(document.getElementById('bash_a_2_2').value) + Number(document.getElementById('bash_a_2_3').value) + Number(document.getElementById('bash_a_2_4').value) + Number(document.getElementById('bash_a_2_5').value) + Number(document.getElementById('bash_a_2_6').value) + Number(document.getElementById('sintez_k_7').value);
    var incoming_damage_ranged = 0 + incoming_damage_mulVal + Number(document.getElementById('grade_buff_ua_incoming_damage').value) + Number(document.getElementById('slot9_buff_ua_incoming_ranged_damage_mul').value) + Number(document.getElementById('slot10_ua_time_incoming_ranged_damage_mul').value) + Number(document.getElementById('skill_buff_21').value) + Number(document.getElementById('bash_a_2_1').value) + Number(document.getElementById('bash_a_2_2').value) + Number(document.getElementById('bash_a_2_3').value) + Number(document.getElementById('bash_a_2_4').value) + Number(document.getElementById('bash_a_2_5').value) + Number(document.getElementById('bash_a_2_6').value) + Number(document.getElementById('sintez_k_9').value);
    var incoming_damage_meele = 0 + incoming_damage_mulVal + Number(document.getElementById('grade_buff_ua_incoming_damage').value) + Number(document.getElementById('slot9_buff_ua_incoming_spell_damage_mul').value) + Number(document.getElementById('slot10_ua_time_incoming_melee_damage_mul').value) + Number(document.getElementById('skill_buff_21').value) + Number(document.getElementById('bash_a_2_1').value) + Number(document.getElementById('bash_a_2_2').value) + Number(document.getElementById('bash_a_2_3').value) + Number(document.getElementById('bash_a_2_4').value) + Number(document.getElementById('bash_a_2_5').value) + Number(document.getElementById('bash_a_2_6').value) + Number(document.getElementById('sintez_k_8').value);

    var incoming_damage_osad = 0 + incoming_damage_mulVal;


    var slots_array = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    var back_melee = 0;
    var back_ranged = 0;
    var back_spell = 0;
    var milAtckAccVal_dop = 0;
    var rngAtckAccVal_dop = 0;
    var splAtckAccVal_dop = 0;
    var incoming_heal_mulVal_dop = 0;
    for (var slots_arraylength = slots_array.length - 1, i = slots_arraylength; i >= 0; i--) {
        back_melee += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_back_melee').value) + Number(document.getElementById('slot' + slots_array[i] + '_d_back_melee').value);
        back_ranged += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_back_ranged').value) + Number(document.getElementById('slot' + slots_array[i] + '_d_back_ranged').value);
        back_spell += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_back_spell').value) + Number(document.getElementById('slot' + slots_array[i] + '_d_back_spell').value);

        milAtckAccVal_dop += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_melee_anti_miss_mul').value);
        rngAtckAccVal_dop += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_ranged_anti_miss_mul').value);
        splAtckAccVal_dop += Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_spell_anti_miss_mul').value);

        incoming_heal_mulVal_dop += Number(document.getElementById('slot' + slots_array[i] + '_ua_time_incoming_heal_mul').value) + Number(document.getElementById('slot' + slots_array[i] + '_buff_ua_incoming_heal_mul').value) + Number(document.getElementById('slot' + slots_array[i] + '_d_buff_incoming_heal_mul').value) + Number(document.getElementById('slot' + slots_array[i] + '_runs_incoming_heal_mul').value);

    }
    ;
    var see_invizVal = Number(document.getElementById('slot1_buff_ua_see_inviz').value) + Number(document.getElementById('slot1_runs_see_inviz').value) + Number(document.getElementById('sintez_k_23').value);

    var incoming_heal_mulVal = 0 + Number(document.getElementById('sintez_16').value) + Number(document.getElementById('sintez_k_10').value) + incoming_heal_mulVal_dop + summa(eiset_ua_incoming_heal_mul);

    var milAtckAccVal = 0 + Number(document.getElementById('toch_melee_pass').value) + milAtckAccVal_dop;
    var rngAtckAccVal = 0 + Number(document.getElementById('toch_ranged_pass').value) + rngAtckAccVal_dop;
    var splAtckAccVal = 0 + Number(document.getElementById('toch_spell_pass').value) + splAtckAccVal_dop;

    if ((Math.floor(strText * 1000) / 10) - Math.floor(strText * 100) == 0.5) {
        strText -= 0.001
    }
    if ((Math.floor(dexText * 1000) / 10) - Math.floor(dexText * 100) == 0.5) {
        dexText -= 0.001
    }
    if ((Math.floor(intlText * 1000) / 10) - Math.floor(intlText * 100) == 0.5) {
        intlText -= 0.001
    }
    if ((Math.floor(hilText * 1000) / 10) - Math.floor(hilText * 100) == 0.5) {
        hilText -= 0.001
    }


    document.getElementById('milAtckVal').innerHTML = (Math.floor(strText * 1000) / 1000).toFixed(2);
    document.getElementById('rngAtckVal').innerHTML = (Math.floor(dexText * 1000) / 1000).toFixed(2);
    document.getElementById('splAtckVal').innerHTML = (Math.floor(intlText * 1000) / 1000).toFixed(2);
    document.getElementById('hilVal').innerHTML = (Math.floor(hilText * 1000) / 1000).toFixed(2);
    document.getElementById('milAtckSpd').innerHTML = atckspdText.toFixed(1) + " сек";
    document.getElementById('milAtckSpd2').innerHTML = "(" + atckspdText2.toFixed(1) + " с.)";
    document.getElementById('incoming_heal_mulVal').innerHTML = incoming_heal_mulVal.toFixed(1) + " %";
    document.getElementById('see_invizVal').innerHTML = see_invizVal + " %";

    $.ajax({
        type: 'POST',
        url: 'inc2/proc.php',
        data: 'armor=' + armor + '&resist=' + resist + '&str=' + str + '&sta=' + vit + '&dex=' + dex + '&int=' + intl + '&spi=' + spi + '&lvl=' + Number(document.getElementById('userlvl').value) + '&slot16_id=' + Number(document.getElementById('slot16_id').value) + '&slot17_category_id=' + Number(document.getElementById('slot17_category_id').value) + '&melee_critical_mulVal=' + melee_critical_mulVal + '&ranged_critical_mulVal=' + ranged_critical_mulVal + '&spell_critical_mulVal=' + spell_critical_mulVal + '&heal_critical_mulVal=' + heal_critical_mulVal + '&blockVal=' + blockVal + '&melee_parry_mulVal=' + melee_parry_mulVal + '&dodge_mulVal=' + dodge_mulVal + '&milAtckAccVal=' + milAtckAccVal + '&rngAtckAccVal=' + rngAtckAccVal + '&splAtckAccVal=' + splAtckAccVal,
        success: function (data) {
            $('#dop_stat').html(data);
        }
    });


    var set_back_melee = back_melee + Number(document.getElementById('sintez_k_12').value) + Number(document.getElementById('slot16_runs_backstab_damage_melee').value) + Number(document.getElementById('slot17_runs_backstab_damage_melee').value) + Number(document.getElementById('slot10_ua_time_back_melee').value) + Number(document.getElementById('sintez_13').value) + summa(eiset_ua_back_melee);
    var set_back_ranged = back_ranged + Number(document.getElementById('slot16_runs_backstab_damage_ranged').value) + Number(document.getElementById('slot17_runs_backstab_damage_ranged').value) + Number(document.getElementById('slot10_ua_time_back_ranged').value);
    var set_back_spell = back_spell + Number(document.getElementById('slot16_runs_backstab_damage_spell').value) + Number(document.getElementById('slot17_runs_backstab_damage_spell').value) + Number(document.getElementById('slot10_ua_time_back_spell').value);

    var rate_shield = 0 + Number(document.getElementById('slot16_buff_ua_rate_shield').value) + Number(document.getElementById('slot17_buff_ua_rate_shield').value) + Number(document.getElementById('weapons_buff_ua_rate_shield').value) + Number(document.getElementById('slot6_1_gravs_rate_shield').value) + Number(document.getElementById('slot6_2_gravs_rate_shield').value) + Number(document.getElementById('slot6_3_gravs_rate_shield').value) + Number(document.getElementById('slot6_4_gravs_rate_shield').value) + Number(document.getElementById('slot6_5_gravs_rate_shield').value) + summa(eiset_ua_rate_shield);

    var shield_mul = 0 + Number(document.getElementById('slot16_buff_ua_shield_mul').value) + Number(document.getElementById('slot17_buff_ua_shield_mul').value) + Number(document.getElementById('weapons_buff_ua_shield_mul').value) + Number(document.getElementById('slot16_1_gravs_shield_mul').value) + Number(document.getElementById('slot16_2_gravs_shield_mul').value) + Number(document.getElementById('slot16_3_gravs_shield_mul').value) + Number(document.getElementById('slot16_4_gravs_shield_mul').value) + Number(document.getElementById('slot16_5_gravs_shield_mul').value) + Number(document.getElementById('slot16_6_gravs_shield_mul').value) + Number(document.getElementById('slot16_7_gravs_shield_mul').value) + Number(document.getElementById('slot17_1_gravs_shield_mul').value) + Number(document.getElementById('slot17_2_gravs_shield_mul').value) + Number(document.getElementById('slot17_3_gravs_shield_mul').value) + Number(document.getElementById('slot17_4_gravs_shield_mul').value) + Number(document.getElementById('slot17_5_gravs_shield_mul').value) + Number(document.getElementById('slot17_6_gravs_shield_mul').value) + Number(document.getElementById('slot17_7_gravs_shield_mul').value);


    document.getElementById('backstab_melee_damage').innerHTML = set_back_melee.toFixed(1) + " %";
    document.getElementById('backstab_ranged_damage').innerHTML = set_back_ranged.toFixed(1) + " %";
    document.getElementById('backstab_spell_damage').innerHTML = set_back_spell.toFixed(1) + " %";
    document.getElementById('ignor_def_rate').innerHTML = rate_shield.toFixed(1) + " %";
    document.getElementById('ignor_def_mul').innerHTML = shield_mul.toFixed(1) + " %";

    if (set_back_melee > 0) {
        $('#backstab_melee_damage').css('color', '#00a000');
    } else {
        $('#backstab_melee_damage').css('color', '#764b07');
    }
    if (set_back_ranged > 0) {
        $('#backstab_ranged_damage').css('color', '#00a000');
    } else {
        $('#backstab_ranged_damage').css('color', '#764b07');
    }
    if (set_back_spell > 0) {
        $('#backstab_spell_damage').css('color', '#00a000');
    } else {
        $('#backstab_spell_damage').css('color', '#764b07');
    }
    if (rate_shield > 0) {
        $('#ignor_def_rate').css('color', '#00a000');
    } else {
        $('#ignor_def_rate').css('color', '#764b07');
    }
    if (shield_mul > 0) {
        $('#ignor_def_mul').css('color', '#00a000');
    } else {
        $('#ignor_def_mul').css('color', '#764b07');
    }
    if (incoming_heal_mulVal > 0) {
        $('#incoming_heal_mulVal').css('color', '#00a000');
    } else {
        $('#incoming_heal_mulVal').css('color', '#764b07');
    }
    if (see_invizVal > 0) {
        $('#see_invizVal').css('color', '#00a000');
    } else {
        $('#see_invizVal').css('color', '#764b07');
    }


    document.getElementById('melee_critical_bonusVal').innerHTML = (50 + melee_critical_bonusVal / 2).toFixed(1) + " %";
    document.getElementById('ranged_critical_bonusVal').innerHTML = (50 + ranged_critical_bonusVal / 2).toFixed(1) + " %";
    document.getElementById('spell_critical_bonusVal').innerHTML = (50 + spell_critical_bonusVal / 2).toFixed(1) + " %";
    document.getElementById('heal_critical_bonusVal').innerHTML = (50 + heal_critical_bonusVal / 2).toFixed(1) + " %";
    document.getElementById('dop_damage_meleeVal').innerHTML = (0 + dop_damage_meleeVal).toFixed(1) + " %";
    document.getElementById('dop_damage_rangedVal').innerHTML = (0 + dop_damage_rangedVal).toFixed(1) + " %";
    document.getElementById('dop_damage_spellVal').innerHTML = (0 + dop_damage_spellVal).toFixed(1) + " %";
    document.getElementById('dop_damage_healVal').innerHTML = (0 + dop_damage_healVal).toFixed(1) + " %";
    document.getElementById('incoming_damage_meeleVal').innerHTML = (0 + incoming_damage_meele).toFixed(1) + " %";
    document.getElementById('incoming_damage_rangedVal').innerHTML = (0 + incoming_damage_ranged).toFixed(1) + " %";
    document.getElementById('incoming_damage_spellVal').innerHTML = (0 + incoming_damage_spell).toFixed(1) + " %";
    document.getElementById('incoming_damage_osadlVal').innerHTML = (0 + incoming_damage_osad).toFixed(1) + " %";


    if (milAtckAccVal + spi_color + str_color > 0) {
        $('#milAtckAcc').css('color', '#00a000');
    }
    if (milAtckAccVal + spi_color + str_color == 0) {
        $('#milAtckAcc').css('color', '#764b07');
    }
    if (rngAtckAccVal + spi_color + dex_color > 0) {
        $('#rngAtckAcc').css('color', '#00a000');
    }
    if (rngAtckAccVal + spi_color + dex_color == 0) {
        $('#rngAtckAcc').css('color', '#764b07');
    }
    if (splAtckAccVal + spi_color + int_color > 0) {
        $('#splAtckAcc').css('color', '#00a000');
    }
    if (splAtckAccVal + spi_color + int_color == 0) {
        $('#splAtckAcc').css('color', '#764b07');
    }


    if (incoming_damage_osad > 0) {
        $('#incoming_damage_osadlVal').css('color', '#00a000');
    }

    if (incoming_damage_osad == 0) {
        $('#incoming_damage_osadlVal').css('color', '#764b07');
    }
    if (incoming_damage_ranged > 0) {
        $('#incoming_damage_rangedVal').css('color', '#00a000');
    }

    if (incoming_damage_ranged == 0) {
        $('#incoming_damage_rangedVal').css('color', '#764b07');
    }
    if (incoming_damage_spell > 0) {

        $('#incoming_damage_spellVal').css('color', '#00a000');
    }

    if (incoming_damage_spell == 0) {

        $('#incoming_damage_spellVal').css('color', '#764b07');
    }
    if (incoming_damage_meele > 0) {

        $('#incoming_damage_meeleVal').css('color', '#00a000');
    }

    if (incoming_damage_meele == 0) {

        $('#incoming_damage_meeleVal').css('color', '#764b07');
    }

    if (melee_critical_mulVal + dex_color > 0) {
        $('#melee_critical_mulVal').css('color', '#00a000');
    }

    if (melee_critical_mulVal + dex_color == 0) {
        $('#melee_critical_mulVal').css('color', '#764b07');
    }

    if (ranged_critical_mulVal + dex_color + int_color > 0) {
        $('#ranged_critical_mulVal').css('color', '#00a000');
    }

    if (ranged_critical_mulVal + dex_color + int_color == 0) {
        $('#ranged_critical_mulVal').css('color', '#764b07');
    }

    if (heal_critical_mulVal > 0) {
        $('#heal_critical_mulVal').css('color', '#00a000');
    }

    if (heal_critical_mulVal == 0) {
        $('#heal_critical_mulVal').css('color', '#764b07');
    }

    if (spell_critical_mulVal + int_color > 0) {
        $('#spell_critical_mulVal').css('color', '#00a000');
    }

    if (spell_critical_mulVal + int_color == 0) {
        $('#spell_critical_mulVal').css('color', '#764b07');
    }


    if (dop_damage_meleeVal > 0) {
        $('#dop_damage_meleeVal').css('color', '#00a000');
    }

    if (dop_damage_meleeVal == 0) {
        $('#dop_damage_meleeVal').css('color', '#764b07');
    }

    if (dop_damage_rangedVal > 0) {
        $('#dop_damage_rangedVal').css('color', '#00a000');
    }

    if (dop_damage_rangedVal == 0) {
        $('#dop_damage_rangedVal').css('color', '#764b07');
    }


    if (dop_damage_healVal > 0) {
        $('#dop_damage_healVal').css('color', '#00a000');
    }

    if (dop_damage_healVal == 0) {
        $('#dop_damage_healVal').css('color', '#764b07');
    }

    if (dop_damage_spellVal > 0) {
        $('#dop_damage_spellVal').css('color', '#00a000');
    }

    if (dop_damage_spellVal == 0) {
        $('#dop_damage_spellVal').css('color', '#764b07');
    }

    if (melee_critical_bonusVal > 0) {
        $('#melee_critical_bonusVal').css('color', '#00a000');
    }

    if (melee_critical_bonusVal == 0) {
        $('#melee_critical_bonusVal').css('color', '#764b07');
    }

    if (ranged_critical_bonusVal > 0) {
        $('#ranged_critical_bonusVal').css('color', '#00a000');
    }

    if (ranged_critical_bonusVal == 0) {
        $('#ranged_critical_bonusVal').css('color', '#764b07');
    }

    if (spell_critical_bonusVal > 0) {
        $('#spell_critical_bonusVal').css('color', '#00a000');
    }

    if (spell_critical_bonusVal == 0) {
        $('#spell_critical_bonusVal').css('color', '#764b07');
    }

    if (heal_critical_bonusVal > 0) {
        $('#heal_critical_bonusVal').css('color', '#00a000');
    }

    if (heal_critical_bonusVal == 0) {
        $('#heal_critical_bonusVal').css('color', '#764b07');
    }

    if ((melee_parry_mulVal + str_color + sta_color > 0) && Number(document.getElementById('slot16_id').value) > 0) {
        $('#melee_parry_mulVal').css('color', '#00a000');
    }

    if ((melee_parry_mulVal + str_color + sta_color == 0) || Number(document.getElementById('slot16_id').value) == 0) {
        $('#melee_parry_mulVal').css('color', '#764b07');
    }

    if ((blockVal + str_color > 0) && Number(document.getElementById('slot17_category_id').value) == 79) {
        $('#blockVal').css('color', '#00a000');
    }

    if (blockVal + str_color == 0 || Number(document.getElementById('slot17_category_id').value) != 79) {
        $('#blockVal').css('color', '#764b07');
    }

    if (dodge_mulVal > 0) {
        $('#dodge_mulVal').css('color', '#00a000');
    }

    if (dodge_mulVal == 0) {
        $('#dodge_mulVal').css('color', '#764b07');
    }


    if (Number(document.getElementById('critVal').innerHTML) > 0) {
        $('#critVal').css('color', '#00a000');
    }

    if (Number(document.getElementById('critVal').innerHTML) == 0) {
        $('#critVal').css('color', '#764b07');
    }

    if (Number(document.getElementById('pvpVal').innerHTML) > 0) {
        $('#pvpVal').css('color', '#00a000');
    }

    if (Number(document.getElementById('pvpVal').innerHTML) == 0) {
        $('#pvpVal').css('color', '#764b07');
    }

    if (Number(document.getElementById('tacktVal').innerHTML) > 0) {
        $('#tacktVal').css('color', '#00a000');
    }

    if (Number(document.getElementById('tacktVal').innerHTML) == 0) {
        $('#tacktVal').css('color', '#764b07');
    }

    if (Number(document.getElementById('ignore_armorVal').innerHTML) > 0) {
        $('#ignore_armorVal').css('color', '#00a000');
    }

    if (Number(document.getElementById('ignore_armorVal').innerHTML) == 0) {
        $('#ignore_armorVal').css('color', '#764b07');
    }

    if (Number(document.getElementById('magic_penetrationVal').innerHTML) > 0) {
        $('#magic_penetrationVal').css('color', '#00a000');
    }

    if (Number(document.getElementById('magic_penetrationVal').innerHTML) == 0) {
        $('#magic_penetrationVal').css('color', '#764b07');
    }

    if (speed_att_k < 100) {
        $('#milAtckSpd').css('color', '#00a000');
        $('#milAtckSpd2').css('color', '#00a000');
    }

    if (speed_att_k == 100) {
        $('#milAtckSpd').css('color', '#764b07');
        $('#milAtckSpd2').css('color', '#764b07');
    }

    if (dex_color > 0) {
        $('#dex').css('color', '#00a000');

    }
    if (dex_color == 0) {
        $('#dex').css('color', '#764b07');

    }

    if (str_color > 0) {
        $('#str').css('color', '#00a000');
    }
    if (str_color == 0) {
        $('#str').css('color', '#764b07');
    }

    if (str_color + melee_dps_incVal + dop_damage_meleeVal_1 > 0) {
        $('#milAtckVal').css('color', '#00a000');
    }

    if (str_color + melee_dps_incVal + dop_damage_meleeVal_1 == 0) {
        $('#milAtckVal').css('color', '#4076d0');
    }

    if (dex_color + ranged_dps_incVal + dop_damage_rangedVal_1 > 0) {
        $('#rngAtckVal').css('color', '#00a000');
    }

    if (dex_color + ranged_dps_incVal + dop_damage_rangedVal_1 == 0) {
        $('#rngAtckVal').css('color', '#4076d0');
    }

    if (int_color + spell_dps_incVal + dop_damage_spellVal_1 > 0) {
        $('#splAtckVal').css('color', '#00a000');
    }

    if (int_color + spell_dps_incVal + dop_damage_spellVal_1 == 0) {
        $('#splAtckVal').css('color', '#4076d0');
    }

    if (spi_color + heal_dps_incVal + dop_damage_healVal_1 > 0) {
        $('#hilVal').css('color', '#00a000');
    }

    if (spi_color + heal_dps_incVal + dop_damage_healVal_1 == 0) {
        $('#hilVal').css('color', '#4076d0');
    }


    if (int_color > 0) {
        $('#int').css('color', '#00a000');

    }
    if (int_color == 0) {
        $('#int').css('color', '#764b07');

    }

    if (sta_color > 0) {
        $('#sta').css('color', '#00a000');

    }
    if (sta_color == 0) {
        $('#sta').css('color', '#764b07');

    }
    if (spi_color > 0 || spi_proc > 0) {
        $('#spi').css('color', '#00a000');

    }
    if (spi_color == 0 && spi_proc == 0) {
        $('#spi').css('color', '#764b07');

    }
    if (color_armor + armor_proc > 0 && armor > 0) {
        $('#armor').css('color', '#00a000');

    }
    if (color_armor + armor_proc == 0 || armor == 0) {
        $('#armor').css('color', '#4076d0');

    }

    if (color_resist + resist_proc > 0) {
        $('#resist').css('color', '#00a000');

    }
    if (color_resist + resist_proc == 0) {
        $('#resist').css('color', '#4076d0');

    }


    eiset_sta = null;
    eiset_spi = null;
    eiset_dex = null;
    eiset_int = null;
    eiset_str = null;
    eiset_max_health = null;
    eiset_max_mana = null;
    eiset_armor = null;
    eiset_move_speed_mul = null;
    eiset_melee_critical_bonus = null;
    eiset_ranged_critical_bonus = null;
    eiset_spell_critical_bonus = null;
    eiset_melee_dps_inc = null;
    eiset_ranged_dps_inc = null;
    eiset_spell_dps_inc = null;
    eiset_heal_dps_inc = null;
    eiset_melee_damage_mul = null;
    eiset_ranged_damage_mul = null;
    eiset_spell_damage_mul = null;
    eiset_melee_speed_mul = null;
    eiset_ignore_armor = null;
    eiset_magic_penetration = null;
    eiset_incoming_damage_mul = null;
    eiset_magic_resist = null;
    eiset_persistent_health_regen = null;
    eiset_persistent_mana_regen = null;
    eiset_casting_time_mul = null;
    eiset_melee_critical_mul = null;
    eiset_ranged_critical_mul = null;
    eiset_spell_critical_mul = null;
    eiset_melee_anti_miss_mul = null;
    eiset_melee_parry_mul = null;
    eiset_ua_spell_dps = null;
    eiset_ua_heal_mul = null;
    eiset_ua_heal_mul1 = null;
    eiset_ua_dodge_mul = null;
    eiset_ua_block_mul = null;
    eiset_ua_incoming_heal_mul = null;
    eiset_ua_back_melee = null;
    eiset_ua_back_ranged = null;
    eiset_ua_back_spell = null;
    eiset_ua_rate_shield = null;


}

function buffset(id_s) {

    if ($('#icon_' + id_s).html() != '') {
        var w = $('#icon_' + id_s).html();
        var b = document.querySelectorAll('#buff_icon');
        var che = 0;
        for (var g = 0, blength = b.length; g < blength; g++) {
            if ($(b[g]).is(':has(#x_' + id_s + ')')) {
                b[g].innerHTML = w;
                che += 1;
                break;
            }
        }
        if (che == 0) {
            $('#buff_icon:empty').first().html(w);
        }
    }
    if ($('#icon_' + id_s).html() == '') {
        var b = document.querySelectorAll('#buff_icon');
        for (var g = 0, blength = b.length; g < blength; g++) {
            if ($(b[g]).is(':has(#x_' + id_s + ')')) {
                b[g].innerHTML = '';
            }
        }
    }

}


function buffsets() {
    for (var i = 1; i < 53; i++) {
        if ($('#icon_' + i).html() != '') {
            var w = $('#icon_' + i).html();
            var b = document.querySelectorAll('#buff_icon');
            var che = 0;
            for (var g = 0, blength = b.length; g < blength; g++) {
                if ($(b[g]).is(':has(#x_' + i + ')')) {
                    b[g].innerHTML = w;
                    che += 1;
                    break;
                }
            }
            if (che == 0) {
                $('#buff_icon:empty').first().html(w);
            }
        }
        if ($('#icon_' + i).html() == '') {
            var b = document.querySelectorAll('#buff_icon');
            for (var g = 0, blength = b.length; g < blength; g++) {
                if ($(b[g]).is(':has(#x_' + i + ')')) {
                    b[g].innerHTML = '';
                }
            }
        }
    }
}

function CloseEditor() {
    document.getElementById('editor').innerHTML = "";
}
function CloseEditor_compar() {
    document.getElementById('editor_compar').innerHTML = "";
    document.getElementById('editor_show').innerHTML = "";
    $("div.showtip_changer").css("margin-left", "-125px");
    $('#block_changer').css('display', 'none');
}
function CloseEditor_runs() {
    document.getElementById('editor_runs').innerHTML = "";
}

function CloseEditor_grade() {
    document.getElementById('editor_grade').innerHTML = "";
}
function Close_ef_editor() {
    document.getElementById('ef_editor').innerHTML = "";
}
function ClearStat() {
    document.getElementById('DrawnItem').innerHTML = "";
}

function cool_down_dop_1() {
    var eiset_melee_speed_mul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    for (var num_slot = 1; num_slot < 20; num_slot++) {
        for (var num_pi = 2; num_pi < 9; num_pi++) {
            if ($('.slot' + num_slot + ' #set_bonuses' + num_pi).hasClass('eiset_on')) {
                if (Number($(".slot" + num_slot + " #set_bonuses" + num_pi + ".eiset_on #ua_melee_speed_mul").html()) > 0) {
                    eiset_melee_speed_mul[num_pi] = Number($(".slot" + num_slot + " #set_bonuses" + num_pi + ".eiset_on #ua_melee_speed_mul").html());
                }
            }
        }
    }

    var melee_speed_mulVal_arr = [Number(document.getElementById('slot1_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot3_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot4_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot5_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot6_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot7_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot8_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot9_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot10_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot11_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot12_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot13_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot14_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot15_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot16_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot17_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot18_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot19_buff_ua_melee_speed_mul').value), Number(document.getElementById('slot10_ua_time_melee_speed_mul').value), Number(document.getElementById('slot1_runs_melee_speed_mul1').value), Number(document.getElementById('slot18_runs_melee_speed_mul1').value), Number(document.getElementById('slot1_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot1_7_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot18_7_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_runs_melee_speed_mul1').value), Number(document.getElementById('slot19_1_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_2_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_3_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_4_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_5_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_6_gravs_melee_speed_mul1').value), Number(document.getElementById('slot19_7_gravs_melee_speed_mul1').value), summa(eiset_melee_speed_mul), Number(document.getElementById('sets_buff_ua_melee_speed_mul').value), Number(document.getElementById('weapons_buff_ua_melee_speed_mul').value), Number(document.getElementById('grade_buff_ua_melee_speed_mul').value), Number(document.getElementById('pis_4').value), Number(document.getElementById('skill_buff_9_2').value), Number(document.getElementById('skill_buff_14').value), Number(document.getElementById('skill_buff_20_2').value)];

    var melee_speed_k = 100;
    for (var i = 0, melee_speed_mulVal_arrlength = melee_speed_mulVal_arr.length; i < melee_speed_mulVal_arrlength; i++) {
        if (melee_speed_mulVal_arr[i] > 0) {
            melee_speed_k -= (melee_speed_k * melee_speed_mulVal_arr[i]) / 100;
        }
    }

    document.getElementById('melee_speed_mulVal').innerHTML = (Math.round(melee_speed_k)).toFixed(1) + " %";
    $('#melee_speed_mulVal').css('color', '#00a000');
}