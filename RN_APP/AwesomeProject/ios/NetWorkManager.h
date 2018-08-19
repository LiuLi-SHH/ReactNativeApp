//
//  NetWorkManager.h
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^ NetWorkSuccess)(id result);
typedef void(^ NetWorkFailure)(id error);

@interface NetWorkManager : NSObject

+ (NetWorkManager *)shareNetWorkManager;

// 网络接口
- (void)postReuest:(NSString *)domin action:(NSString *)action params:(NSDictionary *)params success:(NetWorkSuccess)success failure:(NetWorkFailure)failure;
@end
