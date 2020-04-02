import test from 'tape'
import { filterPlaceWithSiteCode } from '@/services/places'

test('Should be return the place code', t => {
    
    // Arrange
    const places = []
    const code =""

    //  Act
    const result = filterPlaceWithSiteCode(places, code)

    // Assert
    t.equal(result, 'Madrid')

    t.end()
})
