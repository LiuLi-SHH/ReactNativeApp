//
//  NetWorkBridge.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NetWorkBridge.h"
#import "NetWorkManager.h"

@implementation NetWorkBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"本地方法" message:name delegate:self cancelButtonTitle:@"知道了" otherButtonTitles:nil, nil];
    
    [alert show];
  });

  
  NSLog(@"打印jsCallNative信息== %@ == ", name);
}


RCT_EXPORT_METHOD(callBackAction:(NSString *)param back:(RCTResponseSenderBlock)backBlock)
{
  NSString *backStr = [NSString stringWithFormat:@"native修改过的==%@", param];
  NSArray *tempArr = @[backStr];
  backBlock(@[[NSNull null], tempArr]);
  NSLog(@"打印callBackAction信息== %@ == ", param);
}

RCT_EXPORT_METHOD(postReuest:(NSString *)domin action:(NSString *)action params:(NSString *)params back:(RCTResponseSenderBlock)backBlock)
{

  if (domin.length < 1
      || action.length < 1
      || params.length < 1)
  {
    backBlock(@[[[NSError alloc] initWithDomain:@"reqestDomain"
                                            code:1801
                                        userInfo:@{NSLocalizedDescriptionKey:@"入参错误",
                                                   NSLocalizedFailureReasonErrorKey:@"错误原因",
                                                   NSLocalizedRecoverySuggestionErrorKey:@"检查参数",
                                                   NSLocalizedRecoveryOptionsErrorKey:@[@"检查域名",@"检查接口",@"检查入参"]}]]);
    return;
  }
  
  NSDictionary *dic = [self dictionaryWithJsonString:params];
  
  
  dispatch_queue_t aQueue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
  // 发起网络
  __weak typeof(self) weakSelf = self;
  [[NetWorkManager shareNetWorkManager] postReuest:domin action:action params:dic success:^(id result) {
    
    
    dispatch_async(aQueue, ^{
      NSArray *tempResult = @[[weakSelf stringWithDictionary:result]];
      backBlock(@[[NSNull null], tempResult]);
    });
    
    
  } failure:^(id error) {
    backBlock(@[error]);
  }];
  
}


- (void)callBack:(id)sender backBlock:(RCTResponseSenderBlock)backBlock
{
   backBlock(@[[NSNull null], sender]);
}

- (NSString *)stringWithDictionary:(NSDictionary *)dic
{
  
  NSError *parseError = nil;
  
  NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&parseError];
  
  return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
  
}

- (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString
{
  if (jsonString == nil) {
    return nil;
  }
  
  NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
  NSError *err;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
                                                      options:NSJSONReadingMutableContainers
                                                        error:&err];
  if(err) {
    return nil;
  }
  return dic;
}

@end
