//
//  NetWorkManager.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NetWorkManager.h"
#import <AFNetworking/AFNetworking.h>

@interface NetWorkManager ()

@property (nonatomic, strong) AFHTTPSessionManager *mgr;

@end

@implementation NetWorkManager

+ (NetWorkManager *)shareNetWorkManager
{
  static NetWorkManager *mgr = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    mgr = [[NetWorkManager alloc] init];
  });
  return mgr;
}


- (void)postReuest:(NSString *)domin action:(NSString *)action params:(NSDictionary *)params success:(NetWorkSuccess)success failure:(NetWorkFailure)failure
{

  
  [self.mgr POST:[NSString stringWithFormat:@"%@%@", domin, action] parameters:params progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
    if (success)
    {
      success(responseObject);
    }
  } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
    if (failure)
    {
      failure(error);
    }
  }];
}


- (AFHTTPSessionManager *)mgr
{
  if (nil == _mgr)
  {
    _mgr = [[AFHTTPSessionManager alloc] init];
    
  }
  return _mgr;
}

@end
