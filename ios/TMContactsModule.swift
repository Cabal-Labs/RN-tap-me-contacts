//
//  TMContactsModule.swift
//  TMContactsModule
//
//  Copyright © 2022 Brendan Probst . All rights reserved.
//

import Foundation

@objc(TMContactsModule)
class TMContactsModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
