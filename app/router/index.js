// TODO: Fix the bugs to implement the router
import AppNavigator from '@/views/AppNavigator'
import Welcome from '@/views/Welcome'
import SignUp from '@/views/Auth/SignUp'
import Charts from '@/views/Main/Charts'
import Info from '@/views/Main/Info'
import Map from '@/views/Main/Map'
import PrivacyPolicy from '@/views/Privacy/PrivacyPolicy'
import TermsOfService from '@/views/Privacy/TermsOfService'

const routes = {
  appNavigator: AppNavigator,
  welcome: Welcome,
  signup: SignUp,
  charts: Charts,
  info: Info,
  mapa: Map,
  privacyPolicy: PrivacyPolicy,
  termsOfService: TermsOfService
}

export default routes
