import test from 'tape'
import { setMarkers } from '../api'
import { comunidadesAutonomas as places } from './helpers/comunidadesAutonomasFake'
import { covid19Comunidades as covid19Data } from './helpers/covid19ComunidadesFake'

test('setMarkers should get all the place markers with the corresponding info', t => {
    // Arrange

    // Act
    const result = setMarkers(places, covid19Data)

    // Asserts
    t.deepEqual(result[1].code, 'AR')
    t.end()
})