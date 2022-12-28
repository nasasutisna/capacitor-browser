import Foundation

@objc public class browser: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
