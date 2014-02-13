'use strict'

driver = source("driver")

describe "Cylon.Drivers.Rapiro", ->
  module = new Cylon.Drivers.Rapiro
    device: { connection: 'connect' }

  it "needs tests"
