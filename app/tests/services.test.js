import test from 'tape'
import { filterPlaceWithPlaceCode } from '../services/helpers'
import { getDataPlace } from '../services/places'
import { getCovid19PlaceData } from '../services/covid19'
import { setMarker } from '../services/map'
import { comunidadesAutonomas as places } from './helpers/comunidadesAutonomasFake'
import { covid19Comunidades as covid19Data } from './helpers/covid19ComunidadesFake'

test('filterPlaceWithPlaceCode should filter the data of the place corresponding to the place code', t => {
    // Arrange
    const code ="AN"

    //  Act
    const result = filterPlaceWithPlaceCode(places, code)

    // Assert
    t.deepEqual(result[0].name, 'Andalucía', 'The place is filtered and its data is returned')
    t.end()
})

test('filterPlaceWithPlaceCode should filter the Covid 19 data of the place corresponding to the place code', t => {
  // Arrange
  const code ="AN"

  //  Act
  const result = filterPlaceWithPlaceCode(covid19Data, code)

  // Assert
  t.deepEqual(result[0].totalConfirmed, 54, 'The place is filtered and its Covid 19 data is returned')
  t.end()
})

test('getDataPlace should return the data of the place corresponding to the place code', t => {
  // Arrange
  const code = "AS"
  
  //Act
  const result = getDataPlace(places, code)

  //Assert
  t.deepEqual(result.lat, '43.36', 'The data of the place is set and returned' )
  t.end()
})

test('getCovid19PlaceData should return the Covid 19 data of the place corresponding to the place code', t => {
  // Arrange
  const code = "MA"
  
  //Act
  const result = getCovid19PlaceData(covid19Data, code, 'The Covid data of the place is set and returned')

  //Assert
  t.deepEqual(result.subtitle, `contagiados: 782
    fallecidos: 21`, 'The Covid 19 data of the place is set and returned' )
  t.end()
})

test('setMarker should return the info of the marker of the corresponding place code', t => {
  //Arrange
  const code = "CA"

  // Act
  const result = setMarker({ dataPlaces: places, covid19DataPlaces: covid19Data, codePlace: code })

  // Assert
  t.deepEqual(result.code, 'CA', 'The info of the marker corresponding to the place is set and returned')
  t.end()
})
