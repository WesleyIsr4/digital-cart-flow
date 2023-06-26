import colors from './index'

describe('Colors theme', () => {
  it('Should match schema', () => {
    expect(colors).toEqual({
      scaleGray1: '#EBEBEB;',
      scaleGray2: '#DDDDDD;',
      scaleGray3: '#C9C5D4',
      scaleGray4: '#666173',
      scaleBlack: '#151516',
      primaryWhite: ' #FFFFFF',
      primaryBlue: '#191847',
      secondaryOrange: '#F5850B',
      negativeBase: '#E50000',
      warningBase: '#F9A006',
      neutralBase: '#757575',
    })
  })
})
