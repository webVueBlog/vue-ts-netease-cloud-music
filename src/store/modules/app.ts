import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppState {
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {

}

export const ErrorLogModule = getModule(App)
