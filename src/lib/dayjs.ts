import RelativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.extend(RelativeTime)
dayjs.locale('pt-br')