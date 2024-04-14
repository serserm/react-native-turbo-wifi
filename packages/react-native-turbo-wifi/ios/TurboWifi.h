
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTurboWifiSpec.h"

@interface TurboWifi : NSObject <NativeTurboWifiSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TurboWifi : NSObject <RCTBridgeModule>
#endif

@end
