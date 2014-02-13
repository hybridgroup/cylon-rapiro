'use strict'

adaptor = source("adaptor")

describe "Cylon.Adaptors.Rapiro", ->
  module = new Cylon.Adaptors.Rapiro { connection: {port: "/dev/ABCD"} }

  it "needs tests"
