import test from 'tape'
import { filterPlaceWithSiteCode, setPlace } from '@/services/places'

test('It should return the place corresponding to place code', t => {
    
    // Arrange
    const places = [{
        code: 'AN',
        name: 'Andalucía',
        name_official: 'Andalucía',
        lat: '37.366667',
        lng: '-5.983333',
        id: '01'
      }]
    const code ="AN"

    //  Act
    const result = filterPlaceWithSiteCode(places, code)

    // Assert
    t.equal(result[0].name, 'Andalucía')

    t.end()
})
