import { observable, computed } from 'mobx'

class QuestStore {
  @observable quests = [{
    title: 'Hacer correr el prototipo',
    content: 'BORRAR',
    done: true,
    coins: 10,
    id: 1
  },{
    title: 'Estudiar el prototipo',
    content: 'BORRAR',
    done: false,
    coins: 10,
    id: 2
  },{
    title: 'Leer documentos del proyecto',
    content: 'BORRAR',
    done: false,
    coins: 10,
    id: 3
  },{
    title: 'Investigar sobre ReactJs',
    content: 'BORRAR',
    done: false,
    coins: 10,
    id: 4
  },{
    title: 'Pensar ideas y propuestas',
    content: 'BORRAR',
    done: false,
    coins: 10,
    id: 5
  }]

  @observable titleFilter = ''

  @computed get filteredQuest() {
    var matchesFilter = new RegExp(this.titleFilter, 'i')
    return this.quests.filter(quest => !this.titleFilter || matchesFilter.test(quest.title))
  }
}

export default new QuestStore