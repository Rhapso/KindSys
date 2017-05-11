<template>
    <div class="date-picker">
        <div class="date-panel" :style="coordinates">
            <div class="panel-header">
                <div class="pre-month" @click="prevMonthPreview()">上一月</div>
                <div class="year-month-box" >{{tmpYear}}年{{tmpMonth + 1}}月</div>
                <div class="next-month" @click="nextMonthPreview()">下一月</div>
            </div>
            <div class="type-date">
                <ul class="weeks">
                    <li v-for="item in weekList">{{item | week(language)}}</li>
                </ul>
                <ul class="date-list">
                    <li v-for="(item, index) in dateList"
                        :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                        invalid: validateDate(item), firstItem: (index % 7) === 0}"
                        @click="selectDate(item)">
                            <div class="message" :class="{selected: isSelected(item)}">
                                <div class="bg"></div><span v-text="item.value"></span>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ksDatePicker',
    data () {
      let now = new Date()
      return {
        coordinates: {},
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        tmpYear: now.getFullYear(),
        tmpMonth: now.getMonth(),
        value: '',
        minYear: Number,
        minMonth: Number,
        minDate: Number,
        maxYear: Number,
        maxMonth: Number,
        maxDate: Number,
        weekList: [0, 1, 2, 3, 4, 5, 6]
      }
    },
    props: {
      language: {default: 'en'},
      min: {default: '1970-01-01'},
      max: {default: '3016-01-01'},
      isPicked: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      isSelected (item) {
        return this.date === item.value && this.month === this.tmpMonth && item.currentMonth
      },
      prevMonthPreview () {
        this.tmpMonth = this.tmpMonth === 0 ? 0 : this.tmpMonth - 1
      },
      nextMonthPreview () {
        this.tmpMonth = this.tmpMonth === 11 ? 11 : this.tmpMonth + 1
      },
      selectDate (date) {
        setTimeout(() => {
          if (this.validateDate(date) || !this.isPicked) return
          if (date.previousMonth) {
            if (this.tmpMonth === 0) {
              this.year -= 1
              this.tmpYear -= 1
              this.month = this.tmpMonth = 11
            } else {
              this.month = this.tmpMonth - 1
              this.tmpMonth -= 1
            }
          } else if (date.nextMonth) {
            if (this.tmpMonth === 11) {
              this.year += 1
              this.tmpYear += 1
              this.month = this.tmpMonth = 0
            } else {
              this.month = this.tmpMonth + 1
              this.tmpMonth += 1
            }
          }
          this.year = this.tmpYear
          this.month = this.tmpMonth
          this.date = date.value
          let value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)}`
          this.value = value
        }, 0)
      },
      validateYear (year) {
        return year > this.maxYear || year < this.minYear
      },
      validateMonth (month) {
        if (new Date(this.tmpYear, month).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime() && new Date(this.tmpYear, month).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime()) {
          return false
        }
        return true
      },
      validateDate (date) {
        let mon = this.tmpMonth
        if (date.previousMonth) {
          mon -= 1
        } else if (date.nextMonth) {
          mon += 1
        }
        if (new Date(this.tmpYear, mon, date.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime() && new Date(this.tmpYear, mon, date.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()) {
          return false
        }
        return true
      }
    },
    watch: {
      min (v) {
        let minArr = v.split('-')
        this.minYear = Number(minArr[0])
        this.minMonth = Number(minArr[1])
        this.minDate = Number(minArr[2])
      },
      max (v) {
        let maxArr = v.split('-')
        this.maxYear = Number(maxArr[0])
        this.maxMonth = Number(maxArr[1])
        this.maxDate = Number(maxArr[2])
      }
    },
    computed: {
      dateList () {
        let currentMonthLength = new Date(this.tmpYear, this.tmpMonth + 1, 0).getDate()
        let dateList = Array.from({length: currentMonthLength}, (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          }
        })
        let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay()
        let previousMongthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate()
        for (let i = 0, len = startDay; i < len; i++) {
          dateList = [{previousMonth: true, value: previousMongthLength - i}].concat(dateList)
        }
        for (let i = dateList.length, item = 1; i < 42; i++, item++) {
          dateList[dateList.length] = {nextMonth: true, value: item}
        }
        return dateList
      }
    },
    filters: {
      week: (item, lang) => {
        switch (lang) {
          case 'en':
            return {0: 'Su', 1: 'Mo', 2: 'Tu', 3: 'We', 4: 'Th', 5: 'Fr', 6: 'Sa'}[item]
          case 'ch':
            return {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}[item]
          default:
            return item
        }
      },
      month: (item, lang) => {
        switch (lang) {
          case 'en':
            return {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}[item]
          case 'ch':
            return {1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十', 11: '十一', 12: '十二'}[item]
          default:
            return item
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (this.$el.parentNode.offsetWidth + this.$el.parentNode.offsetLeft - this.$el.offsetLeft <= 300) {
          this.coordinates = {right: '0', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
        } else {
          this.coordinates = {left: '0', top: `${window.getComputedStyle(this.$el.children[0]).offsetHeight + 4}px`}
        }
        let minArr = this.min.split('-')
        this.minYear = Number(minArr[0])
        this.minMonth = Number(minArr[1])
        this.minDate = Number(minArr[2])
        let maxArr = this.max.split('-')
        this.maxYear = Number(maxArr[0])
        this.maxMonth = Number(maxArr[1])
        this.maxDate = Number(maxArr[2])
      })
    }
}
</script>

<style scoped lang='less'>
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .date-picker{
        position: relative;
    }
    .date-panel{
    	position: relative;
        width: 100%;
    }
    .panel-header{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }
    .year-month-box, .pre-month, .next-month{
        font-family: Roboto, sans-serif;
        flex: 1;
        text-align: center;
        font-size: 20px;
        line-height: 2;
        background-color: #fff;
        justify-content: center;
        color: green;
    }
    .date-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .valid:hover{
            background-color: #eee;
        }
        li{
            cursor: pointer;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            position: relative;
            margin: 2px;
            &:not(.firstItem){
                margin-left: 10px;
            }
            .message{
                font-family: Roboto, sans-serif;
                font-weight: 300;
                font-size: 14px;
                position: relative;
                height: 45px;
                &.selected{
                    .bg{
                        background-color: rgb(0, 151, 167);
                    }
                    span{
                        color: #fff;
                    }
                }
                &:not(.selected){
                    .bg{
                        transform: scale(0);
                        opacity: 0;
                    }
                }
                .bg{
                    height: 45px;
                    width: 100%;
                    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 10;
                    top: 0;
                    left: 0;
                }
                span{
                    position: absolute;
                    z-index: 20;
                    left: 50%;
                    top: 50%;
                    transform: translate3d(-50%, -50%, 0);
                }
            }
            &.invalid{
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }
    .weeks{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        li{
            font-weight: 600;
        }
    }
    .weeks, .date-list{
        width: 100%;
        text-align: center;
        .preMonth, .nextMonth{
            color: #ccc;
        }
        li{
            font-family: Roboto;
            width: 11%;
            height: 45px;
            text-align: center;
            line-height: 45px;
        }
    }
</style>
